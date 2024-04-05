import { createSlice } from "@reduxjs/toolkit";
import { DateObject } from "react-multi-date-picker";

const initialState = {
  specialDate: "",
  rangeDate: [],
  rangeDateData: [],
  loading: false,
};

const makeDateFormate = (date) => {
  const mydata = new Date(new DateObject(date).convert().toUnix() * 1000);
  return `${mydata.getMonth() + 1}/${mydata.getDate()}/${mydata.getFullYear()}`;
};

const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    setSpecialDate: (state, action) => {
      state.specialDate = action.payload;
    },
    setRangeDate: (state, action) => {
      state.rangeDate = [makeDateFormate(action.payload[0]), makeDateFormate(action.payload[1])];
    },
    setRangeDateData: (state , action) => {
      state.rangeDateData = action.payload?.dayliDeviceReports?.map(el => ({...el , countPer100 : el.count / action.payload?.mustSentForEveryDevice * 100}))
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setSpecialDate, setRangeDate, setRangeDateData , setLoading } = reportsSlice.actions;

export default reportsSlice.reducer;
