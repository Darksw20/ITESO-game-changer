# game-changer-back

A simple and also very complex tournament automatic diagramer.

Para instalar

//create folder game-changer
mkdir

//open the folder
cd game-changer

//clone game-changer-back
git clone git@github.com:Darksw20/game-changer-front.git

// manual copy the next files .back.env .env and docker-compose.yml

//Run docker-compose build --no-cache to build the images
docker-compose build --no-cache

//Run docker-compose up to run the instances
docker-compose up

//Open the mysql container
docker exec -it game-changer-mysql-1 bash

//open the mysql app and authenticate using the .env data
mysql -uroot -p

//create the database
CREATE DATABASE game_changer;

//to be sure the dabase works open the database
USE game_changer

//and check the tables
SHOW TABLES

// To create the database model (When the console print Done migrations is ready the database)
npm run migrate

//start developing
