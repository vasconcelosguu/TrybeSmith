import { Router } from 'express';
import UserController from '../controllers/UserController';

const routers = Router();

const userController = new UserController();

routers.post('/', userController.CreateUser);

export default routers;