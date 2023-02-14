import { Response, Request } from 'express';
import createToken from '../helpers/jwt';
import UserService from '../services/UserService';

export default class UserController {
  public service: UserService;

  constructor() {
    this.service = new UserService();
  }

  CreateUser = async (req: Request, res: Response) => {
    const { error } = await this.service.CreateUser(req.body);
    const userToken = createToken(req.body.username);
    console.log(userToken);
    if (error) return res.status(500).json({ message: error });
    return res.status(201).json({ token: userToken });
  };
}