CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS Orderproduct (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  order_reqid uuid,
  product_reqid uuid,
  quantity INTEGER DEFAULT 1,
  CONSTRAINT order_fk FOREIGN KEY (order_reqid) REFERENCES orders(id),
  CONSTRAINT orderproduct_fk FOREIGN KEY (product_reqid) REFERENCES product(id)
);
