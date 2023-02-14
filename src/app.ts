import express from 'express';
import ProductRoutes from './routes/ProductRoutes';
import UserRoutes from './routes/UserRoutes';
import OrderRoutes from './routes/OrderRoutes';
import LoginRoutes from './routes/LoginRoutes';

const app = express();

app.use(express.json());
app.use('/products', ProductRoutes);
app.use('/users', UserRoutes);
app.use('/orders', OrderRoutes);
app.use('/login', LoginRoutes);

export default app;
