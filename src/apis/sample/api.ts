import axios from "axios";
import { ISampleReq, ISampleRes } from "./type";

export const getSampleApi = async (params: ISampleReq): Promise<ISampleRes> => {
  try {
    // const response = await axios.get("/api/sampe");

    // return response || null;

    return { data: { name: "Test Name" } };
  } catch (e: any) {
    throw e;
  }
};
