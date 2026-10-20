import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../../config/config';

const unauthorized = (res: Response) => {
  return res.status(401).json({
    status: 'error',
    message: 'Unauthorized: missing or invalid token.',
  });
};

const AVToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.get('Authorization');

  if (!authHeader || !authHeader.toLowerCase().startsWith('bearer ')) {
    return unauthorized(res);
  }

  const token = authHeader.substring(7).trim();

  if (!token) {
    return unauthorized(res);
  }

  try {
    const decoded = jwt.verify(token, config.secureToken as string);
    (req as Request & { user?: unknown }).user = decoded;
    return next();
  } catch (_error) {
    return unauthorized(res);
  }
};

export default AVToken;

