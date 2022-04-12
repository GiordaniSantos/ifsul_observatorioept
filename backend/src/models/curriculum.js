module.exports = (sequelize, DataTypes) => {

    const Curriculum = sequelize.define('Curriculum', {
        curriculum_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        idade: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        ensino_fundamental: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ensino_medio:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        ensino_superior:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        rua:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        cep:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        bairro:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        cidade:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        estado:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        atuacao_profissional:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        area_atuacao:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        userId:{
            type: DataTypes.INTEGER
        }

    }) 

    Curriculum.associate = (models) => {
        Curriculum.belongsTo(models.User, {foreignKey: 'userId'})
    };

   Curriculum.associate = (models) => {
        Curriculum.hasMany(models.Article, {foreignKey: 'curriculumId'})
    

        Curriculum.hasMany(models.Project, {foreignKey: 'curriculumId'})
    };

    return Curriculum;
};