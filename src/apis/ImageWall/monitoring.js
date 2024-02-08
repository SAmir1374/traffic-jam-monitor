import { useMutation, useQuery } from "@tanstack/react-query";
import request from "../../utils/request";

export function Monitoring() {
  async function asyncMonitoring() {
    const { data } = await request.post("/MonitorDevice");
    return data;
  }

  return useQuery({
    queryKey: ["IMG"],
    queryFn: () => asyncMonitoring(),
  });
}
