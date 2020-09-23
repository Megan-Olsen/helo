DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS users;

create table users (
    id serial primary key,
    username varchar(20),
    password varchar(20),
    profile_pic text
);

create table posts (
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id int references users(id)
);
/***** thing it wanted me to save in here*/
ALTER TABLE users 
ALTER COLUMN password TYPE text;


UPDATE users SET profile_pic = 'https://robohash.org/Eydis?set=set4' WHERE id = 1;
SELECT * FROM users;

