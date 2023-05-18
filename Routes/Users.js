const express = require('express') ;
const router = express.Router();
const {Users} = require("../models");
const bcrypt = require('bcryptjs');
const {sign} = require('jsonwebtoken');
const {validateToken} = require('../middleware/userMiddleWars');


router.post( '/' ,async (req , res)=>{
    const {firstName , lastName , userName , email , jobTitle , Country , universityName , passWord} = req.body ;

    const username  = await Users.findOne({where : { userName : userName  }}) ;
    
    const usermail  = await Users.findOne({where : {  email : email  }}) ;

    if ( username || usermail ){
        res.json("This User name or email already axist") 
            
    }
    else {
        await bcrypt.hash(passWord , 10).then( hash => {
            Users.create( {
                firstName : firstName ,
                lastName : lastName ,
                userName : userName ,
                email : email ,
                jobTitle : jobTitle ,
                Country : Country ,
                universityName : universityName ,
                passWord : hash
            } )
        } ) ; 
       res.json("User Added Succefully") 
    }
    
    
} );

router.post("/Login" , async(req , res ) => {
    const { userName , email , passWord} = req.body ;
    const username  = await Users.findOne({where : { userName : userName  }}) ;
    
    const usermail  = await Users.findOne({where : {  email : email  }}) ;

    if(!username) {
        res.json({ error : "userName dont exist"}) ;
    }
    else if (!usermail){
        res.json({ error : "email dont exist" }) ;
    }
    else {
        bcrypt.compare(passWord , username.passWord).then( (match) => {
       if (!match)
       {
        res.json({ error : "wrong password"})  
       } 
       else{

        const accessToken = sign({ userName: username.userName , email : username.email , id : username.id } , "importantsecret" ) ;

        res.json({ token : accessToken , userName : userName , email : email , id : username.id  }) ;
       }
     } );
    }

})

router.get ( "/valid" , validateToken , async ( req , res )=> {
    res.json(req.user)
} )

module.exports = router ;