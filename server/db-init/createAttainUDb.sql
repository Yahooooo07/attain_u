drop database if exists attainU;
create database attainU;

\c attainU;

CREATE TABLE users
(
    user_id serial,
    user_full_name VARCHAR(255),
    user_phone VARCHAR(255),
    user_email VARCHAR(255),
    user_name VARCHAR(255),
    user_password VARCHAR(255),

    PRIMARY KEY(user_id)
);


CREATE TABLE food
(
    food_id serial,
    food_name VARCHAR(255),
    restaurant_name VARCHAR(255),
    restaurant_place VARCHAR(255),
    restaurant_cuisine VARCHAR(255),
    restaurant_price VARCHAR(255),

    PRIMARY KEY(food_id)
);
