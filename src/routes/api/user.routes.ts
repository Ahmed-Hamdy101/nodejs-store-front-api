import { Router } from 'express';
import authenticationMiddleware from '../../Middleware/Auth/auth';
import * as handlers from '../../handlers/userControllers';

const userRoutes = Router();

userRoutes.get('/', authenticationMiddleware, handlers.GetAllUsers);
userRoutes.get('/:id', authenticationMiddleware, handlers.GetSpecificUser);
userRoutes.post('/register', authenticationMiddleware, handlers.CreateRecordUser);
userRoutes.patch('/:id/edit', authenticationMiddleware, handlers.UpdateRecordUser);
userRoutes.delete('/:id/delete', authenticationMiddleware, handlers.DeleteUser);
userRoutes.post('/signin', handlers.authentication);

export default userRoutes;
