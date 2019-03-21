CREATE DATABASE auctions;
CREATE ROLE admin WITH LOGIN PASSWORD 'admin';
ALTER ROLE admin CREATEDB;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR(30),
  email VARCHAR(30),
  first_name VARCHAR(30),
  last_name VARCHAR(30)
);

CREATE TABLE items (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(200),
  price integer,
  highest_bidder integer REFERENCES users(id)
);

CREATE TABLE  bids (
  ID SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id),
  item_id integer REFERENCES items(id),
  price integer
);


INSERT INTO users (username, email, first_name, last_name)
  VALUES ('Jerry', 'jerry@example.com', 'jerry', 'smith'), 
  ('George', 'george@example.com', 'george', 'jojaa');