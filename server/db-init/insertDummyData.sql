\c attainU;

INSERT INTO food
    (food_name, restaurant_name, restaurant_place, restaurant_cuisine, restaurant_price)
VALUES
    ('Butter Chicken Cone', 'Indian Accent', 'New Delhi', 'Indian', '5000'),
    ('Prawns Tikka', 'Peshawri', 'Mumbai', 'North Indian', '5000'),
    ('Morroccan Chops', 'Villa Maya', 'Kerala', 'Morroccan', '4000'),
    ('Bukhara Spl. Tandoori', 'Bukhara', 'New Delhi', 'North Indian', '7000'),
    ('The Veg Thali', 'Agashiye', 'Gujarat', 'Gujarati', '2000'),
    ('Rogan Josh', 'Khyber', 'Mumbai', 'North Indian', '3000'),
    ('Spider-Role Sushi', 'Malaka Spice', 'Pune', 'Asian Seafood', '2000'),
    ('Seekh Kebab Meal', 'Gulati', 'New Delhi', 'North Indian', '2000'),
    ('Butter Chicken Biryani', 'Pinch of Spice', 'Agra', 'Punjabi', '1500'),
    ('All Meat Pizza', 'Tuscany Gardens', 'Goa', 'Italian', '1000'),
    ('Paneer Lajawab Tikka', '1135 AD', 'Rajasthan', 'Indian', '3000'),
    ('Hara Bhara Stir Fry', '1559 AD', 'Rajasthan', 'Indian', '3000'),
    ('Karara Krab', '6 Ballygunge Place', 'Kolkata', 'Asian Seafood', '2000'),
    ('Desi Shahi Chaap', 'Aish', 'Hyderabad', 'Indian', '4000'),
    ('Kadhai Chicken Bao', 'Ambrai', 'Rajasthan', 'North Indian', '2000'),
    ('Morroccan Spcl. Salad', 'Amethyst', 'Chennai', 'Morroccan', '1000'),
    ('Chicken Peshawari Tikka', 'Bademiya', 'Mumbai', 'North Indian', '3000'),
    ('Chicken Biryani', 'Bawarchi', 'Hyderabad', 'Indian', '2000'),
    ('Rajma Chawal', 'Bharawan Da Dhaba', 'Amritsar', 'Punjabi', '4000'),
    ('Chicken Methi Kebabs', 'Black Sheep Bistro', 'Goa', 'Indian', '1000'),
    ('Berry Pulao', 'Britannia & Company', 'Mumbai', 'North Indian', '2000'),
    ('Paneer Lababdar', 'Cafe Pallaido', 'Jaipur', 'Indian', '3000'),
    ('Chicken Angara', 'Crystal Restaurant', 'Amritsar', 'North Indian', '1000'),
    ('Kebab Platter', 'The Embassy', 'New Delhi', 'Indian', '5000');
    

-- INSERT INTO sellers
--     (category_id, seller_name)
-- VALUES
--     -- entry for restaurant (Shops)
--     (1, 'Joeys Pizza'),
--     (1, '5 Spice'),
--     (1, 'Belgian Waffles'),


--     -- entry for medicines (shops)
--     (3, 'Apollo Pharmacy'),
--     (3, 'Wellness Forever'),
--     (3, 'Fortis Healthworld');


-- -- sub category data
-- INSERT INTO sub_categories
--     (category_id, seller_id, sub_category_name)
-- VALUES

--     -- entry for restaurants
--     (1, 1, 'Pizza'),
--     (1, 1, 'Garlic Bread'),
--     (1, 1, 'Pasta'),
--     (1, 1, 'Desserts'),
--     (1, 2, 'Chinese'),
--     (1, 2, 'Starters'),
--     (1, 3, 'Waffles'),
--     (1, 3, 'Brownies'),

--     -- entry for groceries 
--     (2, 0, 'Bakery and Bread'),
--     (2, 0, 'Meat and Seafood'),
--     (2, 0, 'Dairy, Cheese, and Eggs'),
--     (2, 0, 'Cereals and Breakfast Foods'),


--     -- entry for medicines
--     (3, 4, 'Fever/Cough'),
--     (3, 4, 'Diarrhoea'),
--     (3, 5, 'Vomitting'),
--     (3, 6, 'Insomnia'),

--     -- entry for vegetables and fruits 
--     (4, 0, 'Dark-Green Vegetables'),
--     (4, 0, 'Starchy Vegetables'),
--     (4, 0, 'Beans and Peas'),
--     (4, 0, 'Other Vegetables');

-- --------inserting items--------------------

-- INSERT INTO items
--     ( sub_category_id,item_name, item_price,item_image,item_discount,item_count,item_description)
-- VALUES
--     ( 1, 'Tornado Pizza', 560, 'image', 5, 50, 'Dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese'),
--     ( 1, 'Butter Chicken Pizza', 500, 'image', 5, 50, 'Dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese'),
--     ( 2, 'Chicken Keema Garlic Bread', 240, 'image2', 5, 50, 'Dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese'),
--     ( 3, 'Mac & Cheese', 380, 'image', 5, 50, 'Dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese'),
--     ( 3, 'Penne Pasta', 260, 'image', 5, 50, 'Dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese'),
--     ( 4, 'Mango Ice Cream', 55, 'image2', 5, 30, 'Dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese'),
--     ( 4, 'Almond Ice Cream', 75, 'image2', 5, 30, 'Dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese'),
--     ( 5, 'Veg Fried Rice', 280, 'image2', 5, 35, ''),
--     ( 5, 'Veg Noodles', 280, 'image2', 5, 35, ''),
--     ( 6, 'Veg Crispy', 100, 'image2', 5, 5, 'it is basically prepared with a choice of vegetables like, mushroom, baby corn, broccoli and cauliflower which is deep fried with plain flour and corn flour batter'),
--     ( 6, 'Veg Manchurian', 100, 'image2', 5, 5, ''),
--     ( 7, 'Berries Waffle', 250, 'image2', 5, 30, ''),
--     ( 7, 'Choco Chip Waffle', 250, 'image2', 5, 30, ''),
--     ( 8, 'Sizzling Brownie', 300, 'image2', 5, 30, ''),
--     ( 9, 'Biscuits', 10, 'image', 5, 25, ''),
--     ( 9, 'Bagels', 150, 'image2', 5, 10, ''),
--     ( 10, 'Chicken', 300, 'image', 5, 25, ''),
--     ( 11, 'Butter', 40, 'image2', 5, 15, ''),
--     ( 12, 'Oats', 450, 'image2', 5, 20, ''),
--     ( 13, 'Crocin', 50, 'image2', 5, 150, ''),
--     ( 14, 'Loperamide', 120, 'image2', 5, 150, ''),
--     ( 15, 'Kaopectate', 80, 'image2', 5, 150, ''),
--     ( 16, 'Restoril', 320, 'image2', 5, 150, ''),
--     ( 17, 'Broccoli', 100, 'image2', 5, 5, ''),
--     ( 18, 'Potatoes', 50, 'image2', 5, 15, ''),
--     ( 19, 'French Beans', 75, 'image2', 5, 20, ''),
--     ( 20, 'Mushrooms', 200, 'image2', 5, 10, '');

-- -- this is default
-- -- insert for customization type
-- INSERT INTO type_of_customization
--     (customization_type)
-- VALUES
--     ('Size'),
--     ('Add-ons'),
--     ('Other'),
--     ('None');

-- -- this is default
-- -- insert for customization
-- INSERT INTO customization
--     (type_of_customization_id,customization_name, customization_price)
-- VALUES
--     (4, 'None', 0);






-- ----------------inserting payment modes details---------------
-- INSERT INTO payment_mode
--     ( mode_of_payment)
-- VALUES
--     ('Credit'),
--     ('Debit');


-- ------------------inserting bill details--------------
-- INSERT INTO bills
--     ( user_id, payment_id, payment_status, payment_request_id, bill_amount)
-- VALUES
--     (1, 'MOJO0a26Y05A47764672', 'Credit', '0b803d7d4c2740e6a4bc3106205c9a65', 1225);

-- --this is default
-- ------------------ insert for order status-------------------
-- INSERT INTO order_status
--     ( order_status_type)
-- VALUES
--     ('Pending'),
--     ('Cancelled'),
--     ('Confirmed');

-- -------------------insert for orders-----------------------

-- INSERT INTO orders
--     ( items,user_id, order_status_id,bill_id)
-- VALUES
--     ( '[{"item_id" : 1,"item_name" : "Tornado Pizza","item_image" : "image","item_price" : 560},{"item_id" : 2, "item_name" : "Butter Chicken Pizza","item_image" : "image","item_price" : 500}]', 1, 1, 1);


-- -------------------insert for cart-----------------------

-- INSERT INTO cart
--     (item_id,user_id,item_count,customization_id)
-- VALUES
--     (1, 1, 2, '{1,3}'),
--     (1, 1, 1, '{1}')