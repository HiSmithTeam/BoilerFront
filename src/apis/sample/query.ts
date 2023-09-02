import { useMutation, useQuery } from "@tanstack/react-query";
import {
  ISampleLoginReq,
  ISampleReq,
  ISampleRes,
  IgetMemberInfoReq,
} from "@/apis/sample/type";
import SampleApi from "@/apis/sample/api";

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

export const useGetMemberInfoMutation = () => {
  return useMutation((params: IgetMemberInfoReq) =>
    SampleApi.getMemberInfo(params)
  );
};
