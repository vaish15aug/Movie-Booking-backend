module.exports = (sequelize, DataTypes) => {
    const Shows = sequelize.define('shows', {

        showId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        movieId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        theaterId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        startTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        endTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        screen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reatedBy: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: timestamps
        },
        updatedAt: {
            type: timestamps
        },
        showDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        showDay: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Shows;
}