import { useMutation } from "@tanstack/react-query";
import request from "../../utils/request";

export function ReportForDateRange() {
  async function asyncReportForDateRange({ from, to }) {
    const { data } = await request.post(`/ReportApi/ReportForDateRange?from=${from}&to=${to}`);

    return data;
  }

  return useMutation({
    mutationFn: (data) => asyncReportForDateRange(data),
    onSettled: () => {},
  });
}
