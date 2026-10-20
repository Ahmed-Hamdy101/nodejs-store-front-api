import { ErrorRequestHandler } from 'express';

interface AppError extends Error {
  status?: number;
}

const _Errors_: ErrorRequestHandler = (error: AppError, _req, res, _next) => {
  const status = error.status ?? 500;
  const message = error.message ?? 'Something went wrong.';

  if (res.headersSent) {
    return _next(error);
  }

  return res.status(status).json({
    status: 'error',
    message,
  });
};

export default _Errors_;




