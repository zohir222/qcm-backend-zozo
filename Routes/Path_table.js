const express = require('express') ;
const router = express.Router();
const {Path_table} = require("../models");
const sequelize = require('sequelize');
const { QueryTypes } = sequelize;
const {validateToken} = require('../middleware/userMiddleWars');
const { param } = require('./UserScor');





router.get( '/:userName' , validateToken , async (req , res)=>{
    
        const userName = req.params.userName ; 
        await Path_table.sequelize.query('CALL qcmproject.new_procedure(:param1)' , { replacements: { param1: `${userName}` } } , {  type: QueryTypes.SELECT });
        const dd = await Path_table.findAll() ;
        res.json( dd);
      
} );

module.exports = router ;