USE ratings_db;
DROP TABLE ratings;

CREATE TABLE ratings (
    id int NOT NULL,
    camp_name VARCHAR(25),
    rating VARCHAR(25),
    camp_id int NOT NULL,
    FOREIGN KEY (camp_id) REFERENCES campgrounds(id)
);

select * from campgrounds;
select * from ratings;

commit;

-- INSERT INTO ratings (text) VALUES ("5 stars");
-- INSERT INTO ratings (text) VALUES ("4 stars");
