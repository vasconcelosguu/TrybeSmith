import { Response, Request } from 'express';
import LoginService from '../services/LoginService';
import createToken from '../helpers/jwt';

export default class LoginController {
  public service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  checkUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const checkResult = await this.service.checkUser(username);
    if (!checkResult.length || checkResult[0].password !== password) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    // if (error) return res.status(401).json({ message: error });
    const loginToken = createToken(username);
    return res.status(200).json({ token: loginToken });
  };
}