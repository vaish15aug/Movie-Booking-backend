module.exports = (sequelize, DataTypes) => {
    const Shows = sequelize.define('shows', {
        showId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        movieId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        theaterId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        startTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        endTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        ticketPrice: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        screen: {
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