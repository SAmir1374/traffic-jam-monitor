import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import ModalButton from "../components/ui/ModalButton";
import { useSelector } from "react-redux";
import MySkeleton from "../components/ui/Skeleton";
import store from "../redux/store";
import { Monitoring } from "../apis/ImageWall/monitoring";
import { setImgWall } from "../redux/slice/imgWall";

function MonitoringPage() {
  const { imgWall } = useSelector((store) => store.imgWall);
  const myMonitoringData = Monitoring();
  const countSkeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    store.dispatch(setImgWall(myMonitoringData.data));
  }, [imgWall, myMonitoringData]);

  return (
    <Grid container justifyContent={"center"}>
      {imgWall?.length === 0 || imgWall === undefined
        ? countSkeleton.map((e) => <MySkeleton key={e} />)
        : imgWall?.map(({ id, imageUrl, temperature, humidity, imageName, imageDateTime }, index) => (
            <ModalButton
              key={id}
              id={id}
              index={index}
              src={imageUrl}
              temperature={temperature}
              wet={humidity}
              location={imageName}
              date={imageDateTime}
            />
          ))}
    </Grid>
  );
}

export default MonitoringPage;
