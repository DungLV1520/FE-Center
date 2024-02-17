

export interface ILoginReq {
  username: string;
  password: string;
  rememberMe: boolean;
}

export enum Role {
  ROLE_ADMIN = 'ROLE_ADMIN',
  ROLE_USER = 'ROLE_USER',
}

