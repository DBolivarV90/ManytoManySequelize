module.exports =(sequelize, DataType)=>{

    const Tag=sequelize.define("tag",
        {
            name: {type: DataType.STRING,},

        }
    );
return Tag;
};