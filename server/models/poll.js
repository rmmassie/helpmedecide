module.exports = (sequelize, DataTypes) => {
    const Poll = sequelize.define('poll',{
        userId: {
            type: DataTypes.INTEGER,
        },
        typeId: {
            type: DataTypes.INTEGER,
        },
        tags: {
            type: DataTypes.STRING,
        },
        question: {
            type: DataTypes.STRING,
        },
        solution1: {
            type: DataTypes.STRING,
        },
        solution2: {
            type: DataTypes.STRING,
        }
    })
    return Poll;
}