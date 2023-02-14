import { Response, Request } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  public service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  GetAllOrders = async (req: Request, res: Response) => {
    const { error, orders } = await this.service.GetAllOrders();
    if (error) return res.status(500).json({ message: error });
    return res.status(200).json(orders);
  };
}