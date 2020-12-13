module.exports = (sequelize, DataTypes) => {

    const Schedule = sequelize.define('Schedule', {
        scheduleId: {
        allowNull: false,
        autoIncrement: true,
         primaryKey: true,
        type: DataTypes.INTEGER,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        external_link: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }) 

    return Schedule;
};