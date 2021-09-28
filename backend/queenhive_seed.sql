\c  queenhive;
INSERT INTO users (username, password, email, image_url)
    VALUES ('ssdamouni', 'password', 'ssdamouni@gmail.com', 'google.com'),
           ('steven', 'password', 'michael@gmail.com', 'google.com'),
           ('rupaul', 'password', 'ssdamouni@gmail.com', 'google.com'),
           ('gigigoode', 'password', 'ssdamouni@gmail.com', 'google.com'),
           ('heidiNCloset', 'password', 'ssdamouni@gmail.com', 'google.com');

INSERT INTO messages (user_id, message)
    VALUES (3, 'I like drag'),
           (4, 'Kandy was one percent less terrible today'),
           (2, 'Jan needs to take a chill pill');

INSERT INTO likes (user_id, message_id)
    VALUES (3, 1),
           (1, 2),
           (4, 3);


INSERT INTO following (user_following_id, user_being_followed_id)
    VALUES (1, 3),
           (3, 4),
           (4, 5),
           (2, 5);

INSERT INTO favorite_queens (user_id, queen_id)
    VALUES (1, 13),
           (3, 17),
           (5, 52);