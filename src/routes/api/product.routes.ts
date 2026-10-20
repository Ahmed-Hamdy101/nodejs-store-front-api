import { Router } from 'express';
import authenticationMiddleware from '../../Middleware/Auth/auth';
import * as productControllers from '../../handlers/productControllers';

const productRoutes = Router();

productRoutes.get('/', productControllers.GetAllProduct);
productRoutes.get('/findAll', productControllers.GetAllProduct);
productRoutes.get('/:id', productControllers.GetSpecificProductByid);
productRoutes.post('/create', authenticationMiddleware, productControllers.CreateRecordProduct);

export default productRoutes;