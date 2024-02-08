import React, { useEffect, useState } from "react";
import InputGroup from "../components/complix/InputGroup";
import Button from "../components/ui/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { AuthLogin } from "../apis/Auth/Login";
import store from "../redux/store";
import { setAccessToken, updateAccessToken } from "../redux/slice/authSlice";
import { json, useNavigate } from "react-router-dom";
import "../styles/pages/login.css";
import { Monitoring } from "../apis/ImageWall/monitoring";
import { setImgWall } from "../redux/slice/imgWall";

function Login() {
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess, data } = AuthLogin();
  const myMonitoringData = Monitoring();

  const SignupSchema = Yup.object().shape({
    username: Yup.string().email("نام کاربری را به فرم ایمیل وارد کنید").required("این فلید اجباری است"),
    password: Yup.string().min(8, "تعداد کاراکتر ها باید بیشتر از 8 تا باشد").required("این فلید اجباری است"),
  });

  const formik = useFormik({
    initialValues: {
      username: localStorage.getItem("remeber_Me")
        ? JSON.parse(localStorage.getItem("remeber_Me")).username
        : "",
      password: localStorage.getItem("remeber_Me")
        ? JSON.parse(localStorage.getItem("remeber_Me")).password
        : "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      localStorage.setItem("remeber_Me", JSON.stringify(values));
      mutate({ Email: values.username, Password: values.password, RememberMe: true });
      setTimeout(() => {
        resetForm();
      }, 1000 * 2);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      store.dispatch(setAccessToken(data?.token));
      store.dispatch(setImgWall(myMonitoringData.data));
      navigate("/ImageWall");
    }
  }, [formik.values, isSuccess]);

  return (
    <form onSubmit={formik.handleSubmit} className="form-group">
      <InputGroup
        icon={<RiLockPasswordLine />}
        inputName={"username"}
        label={"Username"}
        inputClassName={"glassInput"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        inputValue={formik.values.username}
        helperText={formik.errors.username ? formik.errors.username : ""}
      />
      <InputGroup
        icon={<FaUserAlt />}
        inputName={"password"}
        inputType={"password"}
        label={"Password"}
        inputClassName={"glassInput"}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        inputValue={formik.values.password}
        helperText={formik.errors.password ? formik.errors.password : ""}
      />
      <Button disabled={!(!!formik.values.username & !!formik.values.password)} type={"submit"}>
        Login
      </Button>
    </form>
  );
}

export default Login;
