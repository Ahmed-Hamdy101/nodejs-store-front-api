import { Request, Response, Router } from 'express';
import userRoutes from './api/user.routes';
import productRoutes from './api/product.routes';
import orderRoutes from './api/order.routes';

const apiRouter = Router();

apiRouter.use('/users', userRoutes);
apiRouter.use('/user', userRoutes);
apiRouter.use('/products', productRoutes);
apiRouter.use('/orders', orderRoutes);

apiRouter.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: 'API is healthy.' });
});

apiRouter.use((_req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found.',
  });
});

export default apiRouter;