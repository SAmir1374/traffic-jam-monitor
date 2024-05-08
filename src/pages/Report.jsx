import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import MyBox from "../components/ui/Box";
import Divider from "@mui/material/Divider";
import ChartBox from "../components/ui/ChartBox";
import LineChart from "../components/complix/LineChart";
import BarChart from "../components/complix/BarChart";
import AreaChart from "../components/complix/AreaChart";
import DatePicker from "../components/ui/DatePicker";
import persian from "react-date-object/calendars/persian";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { ShowMissTime } from "../apis/Reports/ShowMissTime";
import { DateObject } from "react-multi-date-picker";
import { setForDate, setShowMissTime } from "../redux/slice/reportsSlice";
import Loader from "../components/ui/Loader";
import "../styles/pages/report.css";

function arrayToObject(arr) {
  return arr.reduce((obj, [key, value]) => {
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = [value];
    }
    return obj;
  }, {});
}

const testConvert = (obj) => {
  const smallerObjects = [];
  for (const [key, value] of Object.entries(obj)) {
    const smallObject = {
      clock: parseInt(key),
      mount : value?.length, 
    };
    smallerObjects.push(smallObject);
  }
  return smallerObjects
};

const convert = (items = []) => {
  const missTime = items.map((el) => el.split("T")[1].split(":"));
  const help = missTime.map((el) => [+el[0], el[1]]);
  const help2 = arrayToObject(help);
  return help2;
};

function Report() {
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const report = useSelector((store) => store.reportsSlice);
  const auth = useSelector((state) => state.auth);

  const { mutate, isSuccess, status, data } = ShowMissTime();

  useEffect(() => {
    const pathSeparate = pathname.split("/");
    const id = pathSeparate[2];
    const boardType = pathSeparate[3];

    if (id && auth.accessToken) {
      mutate({ DeviceId: id, fordate: report?.rangeDate[0] });
    }
  }, [pathname, mutate, report?.rangeDate[0]]);

  useEffect(() => {
    dispatch(setShowMissTime(data));
    console.log("report => ", testConvert(convert(report.showMissTime)));
    console.log("report => ", report);
  }, [report.showMissTime, data]);

  return (
    <div>
      {report.loading && (
        <Loader label="کمی صبر کنید" className={"reportsLoader"} />
      )}
      <Grid container spacing={2} className="myGrid">
        <Grid item xs={12} md={12} className="myGridTitle">
          <Grid>
            <div className="title">
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                className="divider"
              />
              <h3>آمار منطقه</h3>
            </div>
          </Grid>
          <Grid>
            <div className="title">
              <DatePicker defaultDate={report.rangeDate} />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <MyBox
            title="بیشترین درصد کارایی"
            colorNumber="green"
            number={`${report.maxMinAvg?.max?.countPer100}%`}
          />
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <MyBox
            title="کمترین درصد کارایی"
            colorNumber="red"
            number={`${report.maxMinAvg?.min?.countPer100}%`}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MyBox
            title="میانگین کارایی همه دستگاه ها"
            number={`${(
              (+report.maxMinAvg?.max?.countPer100 +
                +report.maxMinAvg?.min?.countPer100) /
              2
            ).toFixed(2)}%`}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MyBox title="نرخ کارایی مطلوب" number="90%" />
        </Grid>
        <Grid item xs={12} md={12}>
          <ChartBox className="mychart">
            <LineChart className={"test"} data={report.rangeDateData} />
          </ChartBox>
        </Grid>
        <Grid item xs={12} md={12}>
          <ChartBox className="mychart">
            <BarChart className={"test"} data={testConvert(convert(report.showMissTime))} DataY="mount" DataX="clock" labelY="MissTime" />
          </ChartBox>
        </Grid>
        <Grid item xs={12} md={12}>
          <ChartBox className="mychart">
            <AreaChart className={"test"} data={testConvert(convert(report.showMissTime))} DataY="mount" DataX="clock" labelY="MissTime" />
          </ChartBox>
        </Grid>
      </Grid>
    </div>
  );
}

export default Report;
