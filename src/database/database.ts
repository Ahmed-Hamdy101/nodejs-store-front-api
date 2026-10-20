import { Pool } from 'pg';
import config from '../config/config';

const client = new Pool({
  host: config.host,
  database: config.db_user,
  user: config.user,
  password: config.password,
  port: Number(config.db_port),
  max: 4,
});

client.on('error', (error: Error) => {
  console.error('Database pool error:', error.message);
});

export default client;