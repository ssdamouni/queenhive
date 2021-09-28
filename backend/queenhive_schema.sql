DROP DATABASE queenhive;
CREATE DATABASE queenhive;
\connect queenhive;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(25)  UNIQUE,
    password TEXT NOT NULL,
    email TEXT NOT NULL,
    image_url TEXT,
    is_admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE messages(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users ON DELETE CASCADE,
    message TEXT NOT NULL
);

 CREATE TABLE likes(
     user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
     message_id INTEGER REFERENCES messages (id) ON DELETE CASCADE
 );

 CREATE TABLE following(
     user_following_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
     user_being_followed_id INTEGER REFERENCES users (id) ON DELETE CASCADE
 );

 CREATE TABLE favorite_queens(
     user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
     queen_id INTEGER NOT NULL
 );

 
\i queenhive_seed.sql