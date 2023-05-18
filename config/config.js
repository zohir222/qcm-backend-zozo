const mysql = require('mysql2') ;
const fs = require('fs');
require("dotenv").config();

module.exports =  { 
  "development": {
    "username": "zohir",
    "password": "bensalem:1999",
    "database": "qcmproject",
    "host": "zozodb.mysql.database.azure.com",
    "dialect": "mysql" ,
    "port" : "3306" ,

  } 
  ,
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  } ,
 
}