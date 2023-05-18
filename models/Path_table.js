
module.exports = (sequelize , DataTypes)=>{

    const Path_table = sequelize.define("Path_table" , {

        pathes : {
            type : DataTypes.STRING ,
            allowNull : true ,
        },
        coure : {
            type : DataTypes.STRING ,
            allowNull : true ,
        },
        total_score : {
            type : DataTypes.INTEGER , 
            allowNull : true ,
        },
        total_quest : {
            type : DataTypes.INTEGER , 
            allowNull : true ,
        },
        avancement : {
            type : DataTypes.DECIMAL(4,3) , 
            allowNull : true ,
        },
       
    
       
    }
    , 
     {
       timestamps : false
     } 
    ) ;

  

    return Path_table ;
}
