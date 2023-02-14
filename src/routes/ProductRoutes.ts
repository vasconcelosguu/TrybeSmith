import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const routers = Router();

const productController = new ProductController();

routers.post('/', productController.CreateProduct);
routers.get('/', productController.GetAllProducts);

export default routers;