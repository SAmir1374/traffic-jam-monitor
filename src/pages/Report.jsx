import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import MyBox from "../components/ui/Box";
import Divider from "@mui/material/Divider";
import ChartBox from "../components/ui/ChartBox";
import LineChart from "../components/complix/LineChart";
import BarChart from "../components/complix/BarChart";
import AreaChart from "../components/complix/AreaChart";
import DatePicker from "../components/ui/DatePicker";
import { useParams , useLocation } from "react-router-dom";
import "../styles/pages/report.css";

const data = [
  { name: "Page A", uv: 4000, pv: 2400 },
  { name: "Page B", uv: 3000, pv: 1398 },
  { name: "Page C", uv: 2000, pv: 9800 },
  { name: "Page D", uv: 2780, pv: 3908 },
  { name: "Page E", uv: 1890, pv: 4800 },
];

function Report(props) {
  const param = useParams();
  const { pathname } = useLocation();
  useEffect(() => {
    const pathSeparate = pathname.split("/");
    const id = pathSeparate[2];
    const boardType = pathSeparate[3];
    // console.log("id  ---> ", id);
  }, [pathname]);

  return (
    <div>
      <Grid container spacing={2} className="myGrid">
        <Grid item xs={12} md={12} className="myGridTitle">
          <Grid>
            <div className="title">
              <Divider orientation="vertical" variant="middle" flexItem className="divider" />
              <h3>آمار منطقه</h3>
            </div>
          </Grid>
          <Grid>
            <div className="title">
              <DatePicker />
            </div>
          </Grid>
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
        <Grid item xs={12} md={12}>
          <ChartBox className="mychart">
            <LineChart className={"test"} data={data} />
          </ChartBox>
        </Grid>
        <Grid item xs={12} md={12}>
          <ChartBox className="mychart">
            <BarChart className={"test"} data={data} />
          </ChartBox>
        </Grid>
        <Grid item xs={12} md={12}>
          <ChartBox className="mychart">
            <AreaChart className={"test"} data={data} />
          </ChartBox>
        </Grid>
      </Grid>
    </div>
  );
}

export default Report;
