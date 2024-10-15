export interface ILoginReq {
  username: string;
  password: string;
}

export enum Role {
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_USER = 'ROLE_USER',
}

export interface IDevice {
  id: string;
  name: string;
  description: string;
  status: string;
  available: boolean;
  timeOffAgo: string;
  location: string;
  identityDevice: string;
  userId: string;
  insDatetime: string;
  updDatetime: string;
  isDelete?: boolean;
  osVersion?: string;
  appVersion?: string;
  manufacturer?: string;
  serialNumber?: string;
  model?: string;
  isPresenting?: boolean;
  lastDisconnectedTime?: string;
  scheduleInfo?: string[]
}
