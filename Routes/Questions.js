const express = require('express') ;
const router = express.Router();
const {Questions} = require("../models");
const {validateToken} = require('../middleware/userMiddleWars');
const {upload} = require('../middleware/ImageMiddleWar') ;


router.post( '/' , validateToken , upload.single('image') , async (req , res)=>{

  let image = null ;

  if ( req.file ){
     image = req.file.filename ;
  }
  else {
     image = null ;
  }
    const question = { branche : req.body.branche , ModuleName : req.body.ModuleName , CoursName : req.body.CoursName ,
        question : req.body.question , image : image , UniversityName : req.body.UniversityName  , choice1 : req.body.choice1 , answr1 : req.body.answr1 , choice2 : req.body.choice2 , answr2 : req.body.answr2 ,
         choice3 : req.body.choice3 , answr3 : req.body.answr3 , choice4 : req.body.choice4 , answr4 : req.body.answr4 , choice5 : req.body.choice5, answr5 : req.body.answr5 ,
          choice6 : req.body.choice6 , answr6 : req.body.answr6 , choice7 : req.body.choice7 , answr7 : req.body.answr7  } ;
    await Questions.create(question)
    res.json("Question Added Succefully")
} );

router.get('/GetQstToUpdate/:id' , validateToken , async (req, res)=> {
    const id = req.params.id ; 
    const qq = await Questions.findAll({ where : { id : id} });
    res.json(qq) ;
} ) ; 

router.put('/UpdateQst/:id' , validateToken , async (req, res)=> {
    const id = req.params.id ; 
    const ques = req.body ;
    const qq = await Questions.update({branche : ques.branche , ModuleName : ques.ModuleName , CoursName : ques.CoursName ,
     question : ques.question , choice1 : ques.choice1 , answr1 : ques.answr1 , choice2 : ques.choice2 , answr2 : ques.answr2 ,
      choice3 : ques.choice3 , answr3 : ques.answr3 , choice4 : ques.choice4 , answr4 : ques.answr4 , choice5 :ques.choice5, answr5 : ques.answr5 ,
       choice6:ques.choice6 , answr6 : ques.answr6 , choice7 : ques.choice7 , answr7 : ques.answr7 , image : ques.image } , { where : {id : id} })

    res.json(qq) ;
} ) ; 

router.get( '/branche'  , async (req , res)=>{
   
    const Branches = await Questions.findAll({ attributes : ["branche"] , group : "branche"  });

    res.json(Branches) ;
} );

router.get( '/branche/:field1' ,  async (req , res)=>{

    const field1 = req.params.field1 ;
   
    const Branches = await Questions.findAll({ attributes : [ "ModuleName" ] , group : "ModuleName"  , where : { branche : field1} });

    res.json(Branches) ;
} );

router.get( '/branche/:field1/:field2' ,  async (req , res)=>{

    const field1 = req.params.field1 ;

    const field2 = req.params.field2 ;
   
    const Branches = await Questions.findAll({ attributes : [ "CoursName" ], group : "CoursName" , where : { branche : field1 , moduleName : field2 } });

    res.json(Branches) ;
} );

router.get( '/branche/:field1/:field2/:field3' ,  async (req , res)=>{

    const field1 = req.params.field1 ;

    const field2 = req.params.field2 ;

    const field3 = req.params.field3 ;
   
    const Branches = await Questions.findAll({ attributes : [ "id" , "question" ,"image" , "UniversityName" , "choice1" , "answr1" , "choice2" , "answr2" , "choice3" , "answr3" , "choice4" , "answr4" , "choice5" , "answr5" , "choice6" , "answr6" , "choice7" , "answr7" ] , where : { branche : field1 , moduleName : field2 , CoursName : field3} });

    res.json(Branches) ;
} );



module.exports = router ;