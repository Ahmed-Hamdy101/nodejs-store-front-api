CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS user_tb (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  f_name VARCHAR(100),
  l_name VARCHAR(50),
  passwords VARCHAR(100)
);

INSERT INTO user_tb (id, f_name, l_name, passwords)
VALUES (
  '3d2b795b-287a-4354-9553-1375e1f12656',
  'night',
  'stand',
  '$2b$10$EKEAb4qY8VEl4MI4Vgg5texmINTqEhcMaaJ0u6j731Wf2DfBMsIGK'
)
ON CONFLICT (id) DO NOTHING;

INSERT INTO user_tb (id, f_name, l_name, passwords)
VALUES (
  '6a8d65d7-1d76-4ac2-9b70-78598a12cb17',
  'alan',
  'turning',
  '$2b$10$gzwvyCOxsbqZTUPauA8tqejY8uvI6PxMhPk8lwNsbQsgjO9d3BN7m'
)
ON CONFLICT (id) DO NOTHING;
