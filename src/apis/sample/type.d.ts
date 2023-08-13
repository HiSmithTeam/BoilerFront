export interface ISampleReq {
  id: string;
}

export interface ISampleRes {
  data: { name: string };
}

export interface ISampleLoginReq {
  userId: string;
  password: string;
}

export interface ISampleLoginRes {
  createDate: string;
  modifiedDate: string;
  id: string;
  password: string;
  result: string;
  // createDate: "2023-08-13T07:43:40.302Z";
  // modifiedDate: "2023-08-13T07:43:40.302Z";
  // id: "string";
  // password: "string";
  // result: "string";
}

export interface ISampleApi {
  getSampleApi(param: ISampleReq): Promise<ISampleRes>;
  getSampleLoginApi(param: ISampleLoginReq): Promise<ISampleLoginRes>;
}
