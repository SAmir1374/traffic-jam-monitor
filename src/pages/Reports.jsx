import React from "react";
import Grid from "@mui/material/Grid";
import MyBox from "../components/ui/Box";

function Reports() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <MyBox title="بیشترین درصد کارایی" colorNumber="green" number="63%"/>
        </Grid>
        <Grid item xs={6} md={3}>
          <MyBox title="کمترین درصد کارایی" colorNumber="red" number="43%" />
        </Grid>
        <Grid item xs={6} md={3}>
          <MyBox title="میانگین کارایی همه دستگاه ها" number="52.5%" />
        </Grid>
        <Grid item xs={6} md={3}>
          <MyBox title="نرخ کارایی مطلوب" number="90%" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Reports;
