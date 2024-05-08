import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import MyBox from "../components/ui/Box";
import Divider from "@mui/material/Divider";
import ChartBox from "../components/ui/ChartBox";
import LineChart from "../components/complix/LineChart";
import BarChart from "../components/complix/BarChart";
import Table from "../components/complix/Table";
import DatePicker from "../components/ui/DatePicker";
import "../styles/pages/report.css";
import { useSelector } from "react-redux";
import { ReportForDateRange } from "../apis/Reports/ReportForDateRange";
import { setRangeDateData, setMaxMinData } from "../redux/slice/reportsSlice";
import store from "../redux/store";
import Loader from "../components/ui/Loader";

function Reports() {
  const reports = useSelector((state) => state.reportsSlice);

  const auth = useSelector((state) => state.auth);
  const { mutate, isSuccess, isLoading , status, data } = ReportForDateRange();

  useEffect(() => {
    if (auth.accessToken && reports.rangeDate.length) {
      mutate({ from: reports?.rangeDate[0], to: reports?.rangeDate[1] });
    }

  }, [auth.accessToken, reports.rangeDate, mutate]);

  useEffect(() => {
    if (isSuccess) {
      store.dispatch(setRangeDateData(data));
      store.dispatch(setMaxMinData());
    }
  }, [isSuccess , reports.loading]);

  return (
    <div>
      { reports.loading && <Loader label="کمی صبر کنید" className={'reportsLoader'}/> }
      <Grid container spacing={2} className="myGrid">
        <Grid item xs={12} md={12} className="myGridTitle">
          <div className="title summryTitle">
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              className="divider"
            />
            <h3>خلاصه آمار</h3>
          </div>
          <div className="title">
            <DatePicker defaultDate={reports.rangeDate} />
          </div>
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <MyBox
            title="بیشترین درصد کارایی"
            colorNumber="green"
            number={`${reports.maxMinAvg?.max?.countPer100}%`}
          />
        </Grid>
        <Grid item xs={6} md={6} lg={3}>
          <MyBox
            title="کمترین درصد کارایی"
            colorNumber="red"
            number={`${reports.maxMinAvg?.min?.countPer100}%`}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MyBox
            title="میانگین کارایی همه دستگاه ها"
            number={`${(
              (+reports.maxMinAvg?.max?.countPer100 +
                +reports.maxMinAvg?.min?.countPer100) /
              2
            ).toFixed(2)}%`}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <MyBox title="نرخ کارایی مطلوب" number="90%" />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartBox className="mychart">
            <LineChart className={"test"} data={reports.rangeDateData} />
          </ChartBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartBox className="mychart">
            <BarChart className={"test"} data={reports.rangeDateData} />
          </ChartBox>
        </Grid>
        <Grid item xs={12} md={12}>
          <Table data={reports.rangeDateData} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Reports;
