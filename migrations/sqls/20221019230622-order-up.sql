CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS orders (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  userid uuid NOT NULL,
  CONSTRAINT user_fk FOREIGN KEY (userid) REFERENCES user_tb(id)
);
