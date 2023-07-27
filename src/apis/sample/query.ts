import { useQuery } from "@tanstack/react-query";
import { ISampleReq, ISampleRes } from "./type";
import { getSampleApi } from "./api";

export const useGetSampleApi = (params: ISampleReq) => {
  return useQuery<ISampleRes, Error>(
    ["SAMPLE_API", params],
    () => getSampleApi(params),
    { enabled: !!params.id }
  );
};
