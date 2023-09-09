export interface IRequestReturn {
  ok: boolean;
  message?: string | Object | any;
  data?: IDataRequest | any;
}

export interface IErrorResponse {
  ok: boolean;
  message: string;
}

export interface ILinkRequest {
  link: string;
  short: string;
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  __v?: number | string;
}

export interface IUserResponse {
  ok: boolean;
  data: {
    user: IUserDataInSession;
    token: string;
  };
}
