import { useMutation } from "@tanstack/react-query";
import request from "../../utils/request";

export function ReportForDateRange() {
  async function asyncReportForDateRange({ from = "07/10/2021", to = "08/10/2021" }) {
    const { data } = await request(`/ReportApi/ReportForDateRange?from=${from}&to=${to}`);
    return data;
  }

  return useMutation({
    mutationFn: (data) => asyncReportForDateRange(data),
  });
}
