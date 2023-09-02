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

// member
export interface IgetMemberInfoRes {
  createDate: string;
  modifiedDate: string;
  id: number;
  memberId: string;
  memberPw: string;
  memberIdImageUrl: string;
  nickname: string;
  name: string;
  gender: string;
  introduce: string;
  birth: string;
  phone: string;
  address: string;
  email: string;
  authCode: string;
  snsCode: string;
  status: string;
  memo: string;
}

export interface IgetMemberInfoReq {
  memberId: string;
}

export interface ISampleApi {
  getSampleApi(param: ISampleReq): Promise<ISampleRes>;
  getSampleLoginApi(param: ISampleLoginReq): Promise<ISampleLoginRes>;
  getMemberInfo(param: IgetMemberInfoReq): Promise<IgetMemberInfoRes>;
}
