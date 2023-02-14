import connection from '../models/connection';
import OrderModel from '../models/OrderModel';
 
export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async GetAllOrders() {
    const orders = await this.model.GetAllOrders();
    if (!orders) return { error: 'error' };
    return { orders };
  }
}