module.exports = (sequelize, DataTypes) => {
    const Poll = sequelize.define('poll',{
        userId: {
            type: DataTypes.INTEGER,
        },
        typeId: {
            type: DataTypes.INTEGER,
        },
        tags: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        question: {
            type: DataTypes.STRING(500),
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