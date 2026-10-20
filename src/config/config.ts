import dotenv from 'dotenv';

dotenv.config();

const env = process.env;
const port = Number(env.PORT ?? '4000');
const dbPort = Number(env.PG_PORT ?? '5432');
const isTestingEnv = (env.ENV ?? '').toLowerCase() === 'test';
const activeDatabase = isTestingEnv
  ? (env.PG_DB_TEST ?? env.PG_DB ?? 'storefront')
  : (env.PG_DB ?? 'storefront');

export default {
  host: env.PG_HOST ?? 'localhost',
  user: env.PG_USER ?? 'postgres',
  password: env.PG_PASSWORD ?? 'postgres',
  db_user: activeDatabase,
  db_port: Number.isFinite(dbPort) ? dbPort : 5432,
  port: Number.isFinite(port) ? port : 4000,
  peppar: env.PG_BCRYPY_SC ?? 'storefront',
  salt: env.PG_SALT_ROUND ?? '10',
  secureToken: env.PG_MYTOKEN ?? 'change-me',
};