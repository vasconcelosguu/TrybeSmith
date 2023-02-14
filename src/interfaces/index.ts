export interface ICreateProduct {
  id?: number;
  name: string;
  amount: number;
}

export interface ICreateUser {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface IUserBase {
  id?:number;
  username: string;
  vocation: string;
  level?: number;
  password:string;
}

export interface ILogin {
  username: string;
  password?: string;
}
