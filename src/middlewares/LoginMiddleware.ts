import { Request, Response, NextFunction } from 'express';
import loginSchema from '../helpers/joi';

const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

export default validateUser;