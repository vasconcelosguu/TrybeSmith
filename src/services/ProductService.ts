import { ICreateProduct } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/ProductModel';
 
export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async CreateProduct(product: ICreateProduct) {
    const productId = await this.model.CreateProduct(product);
    if (!productId) return { error: 'Error registering new product' };
    return { result: { id: productId, ...product } };
  }

  async GetAllProducts() {
    const products = await this.model.GetAllProducts();
    if (!products) return { error: 'Error' };
    return { products };
  }
}