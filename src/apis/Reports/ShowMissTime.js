import { useMutation } from "@tanstack/react-query";
import request from "../../utils/request";

export function ShowMissTime() {
  async function asyncShowMissTime({ DeviceId = 3, fordate = "08/10/2023" }) {
    const { data } = await request.post(`ReportApi/ShowfailedTime?DeviceId=${DeviceId}&fordate=${fordate}`);
    return data;
  }

  return useMutation({
    mutationFn: (data) => asyncShowMissTime(data),
  });
}
