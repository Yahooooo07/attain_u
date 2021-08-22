drop database if exists attainU;
create database attainU;

\c attainU;
-- CREATE TABLE categories
-- (
--     category_id serial,
--     category_name VARCHAR(255),

--     PRIMARY KEY(category_id)
-- );


-- INSERT INTO categories
--     (category_name)
-- VALUES
--     ('Restaurants'),
--     ('Groceries'),
--     ('Medicines'),
--     ('Vegetables/Fruits');


-- CREATE TABLE sub_categories
-- (
--     sub_category_id serial,
--     category_id INT,
--     seller_id INT,
--     sub_category_name VARCHAR(255),
--     subcat_image TEXT,

--     PRIMARY KEY(sub_category_id),
--     FOREIGN KEY (category_id) REFERENCES categories(category_id)
-- );

-- CREATE TABLE sellers
-- (
--     seller_id serial,
--     category_id INT,
--     seller_name VARCHAR(255),
--     seller_image TEXT,

--     PRIMARY KEY(seller_id),
--     FOREIGN KEY (category_id) REFERENCES categories(category_id)
-- );

-- CREATE TABLE type_of_customization
-- (
--     type_of_customization_id serial,
--     customization_type VARCHAR (50),

--     PRIMARY KEY (type_of_customization_id)
-- );

-- CREATE TABLE customization
-- (
--     customization_id serial,

--     type_of_customization_id INT,
--     customization_name VARCHAR,
--     customization_price INT,

--     PRIMARY KEY(customization_id),

--     FOREIGN KEY (type_of_customization_id) REFERENCES type_of_customization(type_of_customization_id)
-- );

-- CREATE TABLE items
-- (
--     item_id serial,
--     sub_category_id INT,
--     item_name VARCHAR(255),
--     item_price VARCHAR(255),
--     item_image TEXT,
--     item_discount VARCHAR(255),
--     item_count INT,
--     item_description VARCHAR(255),
--     customization_id VARCHAR
--     [],


--     PRIMARY KEY
--     (item_id),
--     FOREIGN KEY
--     (sub_category_id) REFERENCES sub_categories
--     (sub_category_id)
-- );

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

    -- CREATE TABLE admin
    -- (
    --     admin_id serial,
    --     admin_email VARCHAR(255),
    --     admin_password TEXT,
    --     admin_name VARCHAR(50),

    --     PRIMARY KEY(admin_id)

    -- );


    -- -- Lookup for payment mode
    -- CREATE TABLE payment_mode
    -- (
    --     payment_mode_id serial,
    --     mode_of_payment VARCHAR(255),

    --     PRIMARY KEY(payment_mode_id)
    -- );



    -- CREATE TABLE bills
    -- (
    --     bill_id serial,
    --     user_id serial,
    --     payment_id VARCHAR(255),
    --     payment_status VARCHAR(255),
    --     payment_request_id VARCHAR(255),
    --     bill_amount INT,

    --     PRIMARY KEY(bill_id),
    --     FOREIGN KEY (user_id) REFERENCES users(user_id)
    -- );


    -- -- Lookup table for order status
    -- CREATE TABLE order_status
    -- (
    --     order_status_id serial,
    --     order_status_type VARCHAR(255),

    --     PRIMARY KEY(order_status_id)
    -- );




    -- CREATE TABLE orders
    -- (
    --     order_id serial,
    --     items JSON,
    --     user_id INT,
    --     order_status_id INT,
    --     bill_id INT,
    --     order_created_at TIMESTAMP DEFAULT Now
    -- (),




    --     PRIMARY KEY
    -- (order_id),
    --     FOREIGN KEY
    -- (user_id) REFERENCES users
    -- (user_id),
    --     FOREIGN KEY
    -- (order_status_id) REFERENCES order_status
    -- (order_status_id),
    --     FOREIGN KEY
    -- (bill_id) REFERENCES bills
    -- (bill_id)

    -- );


    -- -- lookup for offers type
    -- CREATE TABLE type_of_offers
    -- (
    --     type_of_offers_id serial,
    --     offer_type VARCHAR (255),

    --     PRIMARY KEY(type_of_offers_id)
    -- );



    -- CREATE TABLE offers
    -- (
    --     offers_id serial,
    --     type_of_offers_id INT,
    --     category_id INT,

    --     PRIMARY KEY(offers_id),
    --     FOREIGN KEY (type_of_offers_id) REFERENCES type_of_offers(type_of_offers_id),
    --     FOREIGN KEY (category_id) REFERENCES categories(category_id)
    -- );









    -- CREATE TABLE cart
    -- (
    --     cart_id serial,
    --     item_id INT,
    --     user_id INT,
    --     item_count INT,
    --     customization_id VARCHAR
    --     [],

    --     PRIMARY KEY
    --     (cart_id),
    --     FOREIGN KEY
    --     (item_id) REFERENCES items
    --     (item_id),
    --     FOREIGN KEY
    --     (user_id) REFERENCES users
    --     (user_id)
        
    -- );



