const mysql = require('mysql2') ;
const fs = require('fs');
require("dotenv").config();

module.exports =  { 
  "development": {
    "username": "root",
    "password": "Zokokoyti1986",
    "database": "qcmproject",
    "host": "localhost",
    "dialect": "mysql"
  } ,
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  } ,
  "production": {
    "username": "zozo",
    "password": "bensalem:1999",
    "database": "qcmproject",
    "host": "mydemoserver-bz.mysql.database.azure.com",
    "dialect": "mysql" ,
    "port" : "3306" ,

  } 
}