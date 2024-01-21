import React from "react";
import Grid from '@mui/material/Grid';
import img from "../components/images/20230604-093500.jpg";
import ModalButton from "../components/ui/ModalButton";

const defualtItem = [
  {
    id: 1,
    src: img,
    temperature: "20 C",
    wet: "19.8",
    location: "کنارگذر شرق اصفهان - تقاطع اصفهان به نایین",
    date: "تاریخ: ۱۴۰۲/۳/۱۴   ساعت: 11:06 ",
  },
  {
    id: 2,
    src: "",
    temperature: "20 C",
    wet: "19.8",
    location: "کنارگذر شرق اصفهان - تقاطع اصفهان به نایین",
    date: "تاریخ: ۱۴۰۲/۳/۱۴   ساعت: 11:06 ",
  },
  {
    id: 3,
    src: img,
    temperature: "20 C",
    wet: "19.8",
    location: "کنارگذر شرق اصفهان - تقاطع اصفهان به نایین",
    date: "تاریخ: ۱۴۰۲/۳/۱۴   ساعت: 11:06 ",
  },
  {
    id: 4,
    src: "",
    temperature: "20 C",
    wet: "19.8",
    location: "کنارگذر شرق اصفهان - تقاطع اصفهان به نایین",
    date: "تاریخ: ۱۴۰۲/۳/۱۴   ساعت: 11:06 ",
  },
  {
    id: 5,
    src: "",
    temperature: "20 C",
    wet: "19.8",
    location: "کنارگذر شرق اصفهان - تقاطع اصفهان به نایین",
    date: "تاریخ: ۱۴۰۲/۳/۱۴   ساعت: 11:06 ",
  },
  {
    id: 6,
    src: "",
    temperature: "20 C",
    wet: "19.8",
    location: "کنارگذر شرق اصفهان - تقاطع اصفهان به نایین",
    date: "تاریخ: ۱۴۰۲/۳/۱۴   ساعت: 11:06 ",
  },
  {
    id: 7,
    src: "",
    temperature: "20 C",
    wet: "19.8",
    location: "کنارگذر شرق اصفهان - تقاطع اصفهان به نایین",
    date: "تاریخ: ۱۴۰۲/۳/۱۴   ساعت: 11:06 ",
  },
  {
    id: 8,
    src: "",
    temperature: "20 C",
    wet: "19.8",
    location: "کنارگذر شرق اصفهان - تقاطع اصفهان به نایین",
    date: "تاریخ: ۱۴۰۲/۳/۱۴   ساعت: 11:06 ",
  },
  {
    id: 9,
    src: "",
    temperature: "20 C",
    wet: "19.8",
    location: "کنارگذر شرق اصفهان - تقاطع اصفهان به نایین",
    date: "تاریخ: ۱۴۰۲/۳/۱۴   ساعت: 11:06 ",
  },
  {
    id: 10,
    src: "",
    temperature: "20 C",
    wet: "19.8",
    location: "کنارگذر شرق اصفهان - تقاطع اصفهان به نایین",
    date: "تاریخ: ۱۴۰۲/۳/۱۴   ساعت: 11:06 ",
  },
];

function MonitoringPage() {
  return (
    <Grid container justifyContent={'center'} >
      {defualtItem.map(({ id, src, temperature, wet, location, date }) => (
        <ModalButton
          key={id}
          id={id}
          src={src}
          temperature={temperature}
          wet={wet}
          location={location}
          date={date}
        />
      ))}
    </Grid>
  );
}

export default MonitoringPage;
