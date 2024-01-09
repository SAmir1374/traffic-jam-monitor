import React from "react";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { MdSignalWifiStatusbarConnectedNoInternet } from "react-icons/md";
import GlassCover from "../ui/GlassCover";
import { TiBatteryCharge } from "react-icons/ti";
import { GiWaterDrop } from "react-icons/gi";
import "../../styles/ui/monitoringItem.css";
import Sencor from "../ui/Sencor";
import Descreption from "../ui/Descreption";
import defualtmonitoring from "../images/defualtmonitoring.jpg";

function MonitoringItem({ className, src, temperature = "20", wet = "19.8", location, date, children }) {
  return (
    <div className={`monitor ${className}`} style={{ backgroundImage: `url(${src || defualtmonitoring})` }}>
      <GlassCover className={`glassCover`}>
        <div className="secsor-group">
          <Sencor icon={<TiBatteryCharge />} />
          <Sencor icon={<LiaTemperatureHighSolid />} lable={"20 c"} />
          <Sencor icon={<GiWaterDrop />} lable={"19.8"} />
        </div>
        <div className="description-group">
          <Descreption
            desc={" کنارگذر شرق اصفهان - تقاطع اصفهان به نایین "}
            date={" تاریخ: ۱۴۰۲/۳/۱۴   ساعت: 11:06 "}
          />
        </div>
      </GlassCover>
    </div>
  );
}

export default MonitoringItem;
