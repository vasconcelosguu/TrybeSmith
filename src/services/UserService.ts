import { ICreateUser } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/UserModels';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }
  
  async CreateUser(user: ICreateUser) {
    const newUser = await this.model.CreateUser(user);
    if (!newUser) return { error: 'Error creating new User' };
    return { result: newUser };
  }
}