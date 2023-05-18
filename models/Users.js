module.exports = (sequelize , DataTypes)=>{

    const Users = sequelize.define("Users" , {

        firstName : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },

        lastName : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },

        userName : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },

        email : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },

        jobTitle : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },
        Country : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },

        universityName : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },
        passWord : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },
    }
    , 
     {
       timestamps : false
     }
    )

    return Users ;
}

