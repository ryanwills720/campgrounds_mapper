SELECT * FROM campgrounds;
USE ratings_db;
DROP TABLE ratings;

CREATE TABLE ratings (
    id int NOT NULL AUTO_INCREMENT,
    camp_name VARCHAR(255),
    rating VARCHAR(25),
    PRIMARY KEY (id)
);

select * from campgrounds;
select * from ratings;

commit;
-- INSERT INTO ratings (text) VALUES ("5 stars");
-- INSERT INTO ratings (text) VALUES ("4 stars");
