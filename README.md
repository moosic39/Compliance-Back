# Compliance-Back

Run `npm start`

Express-generator
Connection MySQL pour les Users
Connection Mongo pour les objets Lists

MySQL : docker run --name mysql-ouroboros -p 3306:3306 -e MYSQL_ROOT_PASSWORD=s3cr3t -d mysql:latest

script SQL:
create schema ouroboros;
create table ouroboros.USERS
(
USER_ID INT auto_increment primary key
);


USE ouroboros;

DROP TABLE IF EXISTS USERS;

CREATE TABLE USERS
(
USER_ID     INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
USERNAME    VARCHAR(50)        NOT NULL,
FIRSTNAME   VARCHAR(50),
LASTNAME    VARCHAR(50),
EMAIL       VARCHAR(50)        NOT NULL,
HASH        VARCHAR(100)       NOT NULL,
TOKEN       VARCHAR(100),
DOCTOR      VARCHAR(100),
DOCTOREMAIL VARCHAR(100)
);

INSERT INTO USERS (firstName, lastName, username, email, HASH) VALUES ('Bruce', 'Wayne', 'batman', 'batman@wayne.com','');
INSERT INTO USERS (firstName, lastName, username, email, HASH) VALUES ('Richard', 'Grayson', 'nightwing', 'nightwing@wayne.com','');
INSERT INTO USERS (firstName, lastName, username, email, HASH) VALUES ('Barbara', 'Gordon', 'batgirl', 'batgirl@wayne.com','');
INSERT INTO USERS (firstName, lastName, username, email, HASH) VALUES ('Jason', 'Todd', 'redhood', 'redhood@wayne.com','');
INSERT INTO USERS (firstName, lastName, username, email, HASH) VALUES ('Damian', 'Wayne', 'robin', 'robin@wayne.com','');

