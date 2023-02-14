import { ILogin } from '../interfaces';
import connection from '../models/connection';
import LoginModel from '../models/LoginModel';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  async checkUser(user:ILogin) {
    const result = await this.model.checkUser(user);
    // if (!result.length) return { error: 'Username or password invalid' };
    return result;
  }
}