import { axiosInstance } from "@/utils/axios";
import {
  ISampleReq,
  ISampleRes,
  ISampleApi,
  ISampleLoginReq,
  ISampleLoginRes,
} from "./type";
import { wait } from "@/utils/common";

const SampleApi: ISampleApi = {
  getSampleApi: (params: ISampleReq) => {
    try {
      const response: ISampleRes = { data: { name: "Test Name" } };

      return wait(3000).then(() => {
        return response;
      });
    } catch (e: any) {
      throw e;
    }
  },
  getSampleLoginApi: async (
    params: ISampleLoginReq
  ): Promise<ISampleLoginRes> => {
    try {
      const response = await axiosInstance
        .get("/user", {
          params: params,
        })
        .then((res) => res);

      return response?.data || null;
    } catch (e: any) {
      throw e;
    }
  },
};

export default SampleApi;
