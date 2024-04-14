import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import opacity from "react-element-popper/animations/opacity";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { useDispatch, useSelector } from "react-redux";
import { ReportForDateRange } from "../../apis/Reports/ReportForDateRange";
import "../../styles/ui/datePicker.css";
import "react-multi-date-picker/styles/layouts/mobile.css";
import {setRangeDate,setRangeDateData,setMaxMinData} from "../../redux/slice/reportsSlice";

function MyDatePicker() {
  const date = new DateObject({ calendar: persian, locale: persian_fa });

  const { mutate, isSuccess, status, data } = ReportForDateRange();
  const Reports = useSelector((state) => state.reportsSlice);
  const dispatch = useDispatch();

  const [values, setValues] = useState([
    new DateObject({ calendar: persian }).subtract(1, "months"),
    new DateObject({ calendar: persian }),
  ]);

  useEffect(() => {
    dispatch(setRangeDate(values));
    
    // if (Reports.rangeDate.length) {
    //   mutate({ from: Reports?.rangeDate[0], to: Reports?.rangeDate[1] });
    //   if (isSuccess) {
    //     dispatch(setRangeDateData(data));
    //     dispatch(setMaxMinData());
    //   }
    // }

    // console.log('data is => ' , data);
    // console.log('reports is => ' , Reports);

  }, [values]);

  return (
    <DatePicker
      hideOnScroll
      className="rmdp-mobile"
      containerClassName="myInput"
      mapDays={({ date }) => {
        let props = {};
        let isWeekend = date.weekDay.index === 6;

        if (isWeekend) props.className = "highlight highlight-red";

        return props;
      }}
      animations={[opacity({ from: 0, to: 1, duration: 1000 })]}
      render={<CustomRangeInput />}
      value={values}
      onChange={setValues}
      dateSeparator="  تا  "
      range
      plugins={[<DatePanel position="right" />]}
      maxDate={new DateObject({ calendar: persian }).add(0, "days")}
      numberOfMonths={1}
      calendar={persian}
      locale={persian_fa}
    ></DatePicker>
  );
}

function CustomRangeInput({ onFocus, value, separator }) {
  var values;

  typeof value !== "object"
    ? (values = value.split(separator))
    : (values = value.toString().split(separator));

  let from = values[0] || "";
  let to = values[1] || "";

  value = from && to ? "از " + from + " تا " + to : from;

  return <input onFocus={onFocus} value={value} readOnly />;
}

export default MyDatePicker;
