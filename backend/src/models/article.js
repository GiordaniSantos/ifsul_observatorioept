module.exports = (sequelize, DataTypes) => {

    const Article = sequelize.define('Article', {
        authors: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        dissemination_vehicle:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        access_link:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    }) 

    return Article;
};