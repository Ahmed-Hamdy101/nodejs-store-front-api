import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import _Errors_ from './Middleware/errorMiddleware';
import config from './config/config';
import endPointRoutes from './routes';
import html from './template/teamplate';

const app: Application = express();
const PORT = Number(config.port) || 4000;

app.use(morgan('short'));
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 60,
    standardHeaders: true,
    legacyHeaders: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use('/api', endPointRoutes);

app.get('/', (_req: Request, res: Response) => {
  res.send(html('/'));
});

app.use(_Errors_);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is starting at port:${PORT}`);
  });
}

export default app;
