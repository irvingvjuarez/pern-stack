CREATE DATABASE pern_stack;

-- Connect to the just created db
-- \c pern_stack

CREATE TABLE tasks (
  task_id SERIAL PRIMARY KEY,
  task_name VARCHAR(75) UNIQUE,
  task_description VARCHAR(255),
  created_at DATE DEFAULT CURRENT_TIMESTAMP
);