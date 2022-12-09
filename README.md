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
