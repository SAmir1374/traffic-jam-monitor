import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import MyBox from "../components/ui/Box";
import Divider from "@mui/material/Divider";
import ChartBox from "../components/ui/ChartBox";
import LineChart from "../components/complix/LineChart";
import BarChart from "../components/complix/BarChart";
import Table from "../components/complix/Table";
import DatePicker from "../components/ui/DatePicker";
import { ReportForDateRange } from "../apis/Reports/ReportForDateRange";
import "../styles/pages/report.css";
import { useSelector } from "react-redux";

const mydata = [
  { name: "Page A", uv: 4000, pv: 2400 },
  { name: "Page B", uv: 3000, pv: 1398 },
  { name: "Page C", uv: 2000, pv: 9800 },
  { name: "Page D", uv: 2780, pv: 3908 },
  { name: "Page E", uv: 1890, pv: 4800 },
];

function Reports() {
  const reports = useSelector((state) => state.reportsSlice);
  const { mutate, isSuccess, status, data } = ReportForDateRange();

  useEffect(() => {
    console.log("reports => ", reports);
  }, [reports]);

  return (
    <div>
      <Grid container spacing={2} className="myGrid">
        <Grid item xs={12} md={12} className="myGridTitle">
          <div className="title">
            <Divider orientation="vertical" variant="middle" flexItem className="divider" />
            <h3>خلاصه آمار یک ماه اخیر</h3>
          </div>
          <div className="title">
            <DatePicker />
          </div>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <MyBox title="بیشترین درصد کارایی" colorNumber="green" number="63%" />
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <MyBox title="کمترین درصد کارایی" colorNumber="red" number="43%" />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MyBox title="میانگین کارایی همه دستگاه ها" number="52.5%" />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MyBox title="نرخ کارایی مطلوب" number="90%" />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartBox className="mychart">
            <LineChart className={"test"} data={mydata} />
          </ChartBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartBox className="mychart">
            <BarChart className={"test"} data={mydata} />
          </ChartBox>
        </Grid>
        <Grid item xs={12} sx={12} md={12}>
          <Table />
        </Grid>
      </Grid>
    </div>
  );
}

export default Reports;
