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
        releseDate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        posterImg: {
            type: DataTypes.varchar,
            allowNull: false
        },
        createdBy: {
            type: DataTypes.String,
            allowNull: false
        },
        createdAt: {
            type: timestamps
        },
        updatedAt: {
            type: timestamps
        }

    });
    return Movies;
}