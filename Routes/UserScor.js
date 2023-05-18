const express = require('express') ;
const router = express.Router();
const {UserScor} = require("../models");
const {validateToken} = require('../middleware/userMiddleWars');



router.post( '/' , validateToken , async (req , res)=>{
    const userscor = req.body ;
    await UserScor.create(userscor)
    res.json("Score Added Succefully")
} );

router.get( '/branche/:username' , validateToken , async (req , res)=>{
    const userName = req.params.username ;
    const branches = await UserScor.findAll({ attributes : [ "branche" ] , group : "branche"  , where : { userName : userName } })
    res.json(branches)
} );

router.get( '/modules/:branche' , validateToken , async (req , res)=>{
    const branche = req.params.branche ;
    const modules = await UserScor.findAll({ attributes : [ "module" ] , group : "module"  , where : { branche : branche } })
    res.json(modules)
} );

router.get( '/courses/:module' , validateToken , async (req , res)=>{
    const module = req.params.module ;
    const courses = await UserScor.findAll({ attributes : [ "coure" ] , group : "coure"  , where : { module : module } })
    res.json(courses)
} );

router.get( '/qstId/:coure' , validateToken , async (req , res)=>{
    const coure = req.params.coure ;
    const QstId = await UserScor.findAll({ attributes : [ "QstId" ] , group : "QstId"  , where : { coure : coure } })
    res.json(QstId)
} );



module.exports = router ;