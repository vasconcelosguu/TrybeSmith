import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const routers = Router();

const orderController = new OrderController();

routers.get('/', orderController.GetAllOrders);

export default routers;