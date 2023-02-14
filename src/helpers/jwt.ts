import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { IUserBase } from '../interfaces';

dotenv.config();

const secret: string = process.env.JWT_SECRET || 'yoursecrethere';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export default (user: IUserBase) => {
  const token = jwt.sign({ data: user }, secret, jwtConfig as object);
  return token;
};
