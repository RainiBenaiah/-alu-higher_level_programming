-- script that lists all records of the table second_table of the database hbtn_0c_0 in your MySQL server.
CREATE TABLE  IF NOT EXISTS second_table(
        id INT AUTO_INCREMENT,
        name VARCHAR(256),
        score INT

);

INSERT INTO second_table(name, score) VALUES(“John”, score = 10);
INSERT INTO second_table(name, score) VALUES(“Alex”, score = 3);
INSERT INTO second_table(name, score) VALUES(“Bob”, score = 14);
INSERT INTO second_table(name, score) VALUES(“George”, score = 8);
