export interface IResponseLogOT {
  result: IResultLogOT;
  data: ILogOTData;
}
export interface ILogOTData {
  pageSize: number;
  pageNumber: number;
  totalRecord: number;
  totalPages: number;
  approvalPendingQuantity: number;
  content: ILogOTContent[];
}
export interface ILogOTContent {
  index?: number;
  id: number;
  status: string;
  otDate: string;
  otLogTime: number;
  otTypes: string;
  otReasons: string;
  leaderApproveTime?: any;
  pmApproveTime?: any;
  leaderId: number;
  pmId?: any;
  teamId: number;
  insDatetime?: any;
  delFlag?: any;
  insId?: any;
  updDatetime: string;
  updId: number;
  userId: number;
  createdBy: ILogOTCreatedBy;
}
export interface ILogOTCreatedBy {
  name: string;
  team: string;
  position: string;
}
export interface IResultLogOT {
  message: string;
  ok: boolean;
  responseCode: string;
}

export interface IResponseLogOTDetail {
  result: IResultLogOT;
  data: ILogOTDetail;
}
export interface ILogOTDetail {
  id: number;
  status: string;
  otDate: string;
  otLogTime: number;
  otTypes: string;
  otReasons: string;
  leaderApproveTime?: any;
  pmApproveTime?: any;
  leaderId: number;
  pmId?: any;
  teamId: number;
  insDatetime?: any;
  delFlag?: any;
  insId?: any;
  updDatetime: string;
  updId: number;
  userId: number;
  createdBy: ILogOTCreatedBy;
}

export interface ILogOTRequestBody {
  teamId: number;
  status: number;
  officeId: number;
  otType: number;
  startDate: string;
  endDate: string;
  // userIds: number[];
}
