import axios from "axios";
import { ISampleReq, ISampleRes } from "./type";
import { wait } from "@/utils/common";

export const getSampleApi = async (params: ISampleReq): Promise<ISampleRes> => {
  try {
    // const response = await axios.get("/api/sampe");

    // return response || null;

    return wait(1000).then(() => {
      return { data: { name: "Test Name" } };
    });
  } catch (e: any) {
    throw e;
  }
};
