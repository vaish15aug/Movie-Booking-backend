module.exports = (sequelize, DataTypes) => {
    const Movies = sequelize.define('movie', {

        title: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        language:{
            type: DataTypes.STRING,
            allowNull:false
        },
        releseDate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        posterImg: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdBy: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
    
    });
    return Movies;
}