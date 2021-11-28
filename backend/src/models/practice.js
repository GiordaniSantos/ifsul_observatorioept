module.exports = (sequelize, DataTypes) => {
    const Practice = sequelize.define('Practice', {
        practice_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        }, 
        abstract: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        place: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true,
        }, 
        subject: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    Practice.prototype.toJSON = function() {
        const values = { ...this.get() };
        return values;
    };

    return Practice;
}