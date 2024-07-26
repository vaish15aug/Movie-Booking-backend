
module.exports = (sequelize, DataTypes) => {
    const Theater = sequelize.define('theater', {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        theaterName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.JSON,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postalCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: timestamps
        },
        updatedAt: {
            type: timestamps
        }

    });
    return Theater;
}