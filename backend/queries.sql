CREATE ROLE admin WITH LOGIN PASSWORD 'admin';
ALTER ROLE admin CREATEDB;

DROP DATABASE simpleauction;
CREATE DATABASE simpleauction;

\c simpleauction;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  username VARCHAR(30),
  email VARCHAR(30),
  first_name VARCHAR(30),
  last_name VARCHAR(30)
);

DROP TABLE IF EXISTS items;
CREATE TABLE items (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(200),
  price integer,
  highest_bidder integer REFERENCES users(id)
);

DROP TABLE IF EXISTS descriptions;
CREATE TABLE descriptions (
ID SERIAL PRIMARY KEY,
item_id integer REFERENCES items(id), 
description VARCHAR (200));

DROP TABLE IF EXISTS images;
CREATE TABLE images (
ID SERIAL PRIMARY KEY,
item_id integer REFERENCES items(id), 
image_src VARCHAR (200));

DROP TABLE IF EXISTS bids;
CREATE TABLE  bids (
  ID SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id),
  item_id integer REFERENCES items(id),
  price integer
);




-- Populate Database

INSERT INTO users (username, email, first_name, last_name)
  VALUES ('Jerry', 'jerry@example.com', 'jerry', 'smith'), 
  ('George', 'george@example.com', 'george', 'jojaa');

INSERT INTO items (name, price, highest_bidder)
  VALUES ('Broken Time Machine', 45, 1);

INSERT INTO images (item_id, image_src)
  VALUES (1, 'https://picsum.photos/200/300');

INSERT INTO descriptions (item_id, description)
  VALUES (1, 'This is an item'),
  (1, 'it has awesome feature'),
(1, 'dont even think twice about it dawg'),
(1, 'what are you waiting for'),
(1, 'just joking this shit is broken'),
(1, 'i am just being freacking honest with you man'),
(1, 'what else do you want me to do'),
(1, 'take it or go');