const express = require('express') ;
const app = express();


app.use(express.json()) ;

app.use(express.static('public')) ;

const db = require('./models') ;

app.get("/" , (req , res)=> {
  res.json("hello backend......");
} )

const userRouter = require('./Routes/Users');
app.use( "/Users" , userRouter ) ;

const questionRouter = require('./Routes/Questions');
app.use( "/Questions" , questionRouter ) ;

const userScorRouter = require('./Routes/UserScor');
app.use( "/UserScor" , userScorRouter ) ;

const userPath_table = require('./Routes/Path_table');
app.use( "/Score" , userPath_table ) ;

db.sequelize.sync().then(()=> {
    app.listen(  process.env.PORT || 3009 ,  ()=>{
    console.log("/**************server running on port 3009*******************************************************************/");
  })
} )
