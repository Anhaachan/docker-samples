CREATE TABLE test_table (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100)
);

INSERT INTO test_table (name) VALUES
('Item 1'),
('Item 2'),
('Item 3');
