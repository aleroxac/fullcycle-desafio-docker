DROP DATABASE IF EXISTS fullcycle;
CREATE DATABASE fullcycle;
USE fullcycle;

CREATE TABLE `people` (
    people_id INT(6) AUTO_INCREMENT PRIMARY KEY,
    people_name VARCHAR(30) NOT NULL
);
