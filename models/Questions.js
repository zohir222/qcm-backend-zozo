

module.exports = (sequelize , DataTypes)=>{

    const Questions = sequelize.define("Questions" , {

        branche : {
            type : DataTypes.STRING ,
            allowNull : false ,
        },

        ModuleName : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },

        CoursName : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },

        question : {
            type : DataTypes.TEXT('LONG')  , 
            allowNull : false ,
        },
        image : {
            type : DataTypes.STRING  , 
            allowNull : true ,
            defaultValue :  null
        },
        UniversityName : {
            type : DataTypes.STRING , 
            allowNull : true ,
        },
        choice1 : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },
        answr1 : {
            type : DataTypes.BOOLEAN , 
            allowNull : false ,
            defaultValue :  false
        } ,
        choice2 : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },
        answr2 : {
            type : DataTypes.BOOLEAN , 
            allowNull : false ,
            defaultValue :  false
        } ,
        choice3 : {
            type : DataTypes.STRING , 
            allowNull : true ,
        },
        answr3 : {
            type : DataTypes.BOOLEAN , 
            allowNull : true ,
            defaultValue :  false
        } ,
        choice4 : {
            type : DataTypes.STRING , 
            allowNull : true ,
        },
        answr4 : {
            type : DataTypes.BOOLEAN , 
            allowNull : true ,
            defaultValue :  false
        } ,
        choice5 : {
            type : DataTypes.STRING , 
            allowNull : true ,
        },
        answr5 : {
            type : DataTypes.BOOLEAN , 
            allowNull : true ,
            defaultValue :  false
        } ,
        choice6 : {
            type : DataTypes.STRING , 
            allowNull : true ,
        },
        answr6 : {
            type : DataTypes.BOOLEAN , 
            allowNull : true ,
            defaultValue :  false
        } ,
        choice7 : {
            type : DataTypes.STRING , 
            allowNull : true ,
        },
        answr7 : {
            type : DataTypes.BOOLEAN , 
            allowNull : true ,
            defaultValue :  false
        } 
    
       
    }
    , 
     {
       timestamps : false
     } 
    )

    return Questions ;
}
