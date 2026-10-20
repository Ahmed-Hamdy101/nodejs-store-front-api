import { Router } from 'express';
import * as orderproductControllers from '../../handlers/orderController';
import authenticationMiddleware from '../../Middleware/Auth/auth';

const orderRoutes = Router();

orderRoutes.post('/createorder', authenticationMiddleware, orderproductControllers.pushOrderFunc);
orderRoutes.get('/:pid/Orderproduct', authenticationMiddleware, orderproductControllers.GetOrderproduct);
orderRoutes.get('/:userid', authenticationMiddleware, orderproductControllers.GetSpecificOrderByUserid);
orderRoutes.post('/:oid/addproductorder', authenticationMiddleware, orderproductControllers.CreateOrderToProduct);

export default orderRoutes;