module.exports = (sequelize, DataTypes) => {

    const Article = sequelize.define('Article', {
        article_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        },
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

    Article.associate = (models) => {
        Article.belongsTo(models.Curriculum, {foreignKey: 'curriculumId'})
    };
/*
    Curriculum.associate = (models) => {
        Curriculum.hasMany(models.Article, {foreignKey: 'curriculumId'})
    };

    Curriculum.associate = (models) => {
        Curriculum.hasMany(models.Article, {foreignKey: 'curriculumId'})
    };
*/
    return Article;
};