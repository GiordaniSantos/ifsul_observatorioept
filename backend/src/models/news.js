module.exports = (sequelize, DataTypes) => {
    
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);

    const News = sequelize.define('News', {
        news_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            },
            authors: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            title: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            date:{
                type: TIMESTAMP,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            },
    })

    return News;
}

