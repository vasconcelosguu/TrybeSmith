import { Response, Request } from 'express';
import ProductService from '../services/ProductService';

export default class UserController {
  public service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  CreateProduct = async (req: Request, res: Response) => {
    const { error, result } = await 
    this.service.CreateProduct(req.body);
    if (error) return res.status(500).json({ message: error });
    return res.status(201).json(result);
  };

  GetAllProducts = async (req: Request, res: Response) => {
    const { error, products } = await this.service.GetAllProducts();
    if (error) return res.status(500).json({ message: error });
    return res.status(200).json(products);
  };
}