module.exports = (sequelize , DataTypes)=>{

    const UserScor = sequelize.define("UserScor" , {

        userName : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },

        email : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },
        branche : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },
        module : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },
        coure : {
            type : DataTypes.STRING , 
            allowNull : false ,
        },
        QstId : {
            type : DataTypes.STRING , 
            allowNull : false ,
        }
    } , {
        timestamps : false
    })

    return UserScor ;
}