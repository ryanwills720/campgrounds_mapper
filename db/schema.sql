DROP DATABASE IF EXISTS ratings_db;

CREATE DATABASE ratings_db;
USE ratings_db;
DROP TABLE campgrounds;

CREATE TABLE campgrounds (
id INT NOT NULL AUTO_INCREMENT,
longitude DECIMAL(10,8) NOT NULL,
latitude DECIMAL(10,8) NOT NULL, 
name VARCHAR(255) NOT NULL,
phone VARCHAR(25),
dates_open VARCHAR(255),
state VARCHAR(30) NOT NULL,
city VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

commit;
SELECT * FROM campgrounds;

CREATE TABLE ratings (
    id
)