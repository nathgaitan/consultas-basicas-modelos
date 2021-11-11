module.exports = (sequelize,dataTypes) => {
    
    const alias = 'Genre';

    const cols = {
        id : {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false,
        },
        ranking : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique : true
        },
        active : {
            type : dataTypes.BOOLEAN,
            defaultValue : 1,
            allowNull : false
        }
    }
    const config = {
        underscored : true
    }
    const Genre = sequelize.define(alias,cols,config)

    return Genre
}