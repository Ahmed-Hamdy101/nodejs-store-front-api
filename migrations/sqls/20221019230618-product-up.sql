CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS product (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  names VARCHAR(100),
  price INTEGER,
  quantity INTEGER DEFAULT 1
);

INSERT INTO product (id, names, price, quantity)
VALUES (
  '4e08ef4f-d468-487d-bce6-6cac3c5c8554',
  'nokia',
  500,
  2
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO product (id, names, price, quantity)
VALUES (
  'ebbdb68a-05ba-4518-aebe-c9d5ef62188c',
  'S6',
  2500,
  1
)
ON CONFLICT (id) DO NOTHING;
