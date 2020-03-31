module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        passwordhash: DataTypes.STRING,

        pollCount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        responseCount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        rank: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    });
    
};