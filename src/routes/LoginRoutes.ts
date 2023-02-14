import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import validateUser from '../middlewares/LoginMiddleware';

const routers = Router();

const loginController = new LoginController();

routers.post('/', validateUser, loginController.checkUser);

export default routers;