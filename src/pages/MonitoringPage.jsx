import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import ModalButton from "../components/ui/ModalButton";
import store from "../redux/store";

function MonitoringPage() {
  useEffect(() => {
    console.log("store.getState is => ", store.getState().imgWall.imgWall);
  }, [store.getState().imgWall.imgWall]);

  return (
    <Grid container justifyContent={"center"}>
      {store
        .getState()
        .imgWall.imgWall?.map(({ id, imageUrl, temperature, humidity, imageName, imageDateTime }, index) => (
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
