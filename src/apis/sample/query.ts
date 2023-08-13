import { useMutation, useQuery } from "@tanstack/react-query";
import { ISampleLoginReq, ISampleReq, ISampleRes } from "./type";
import SampleApi from "./api";

export const useGetSampleQuery = (params: ISampleReq) => {
  return useQuery<ISampleRes, Error>(
    ["SAMPLE_API", params],
    () => SampleApi.getSampleApi(params),
    { enabled: !!params.id }
  );
};

export const useGetSamleLoginMutation = () => {
  return useMutation((params: ISampleLoginReq) =>
    SampleApi.getSampleLoginApi(params)
  );
};
