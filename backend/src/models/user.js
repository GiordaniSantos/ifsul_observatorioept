module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        user_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            },
            user_type:{
                type: DataTypes.ENUM('discente', 'professor', 'secretário', 'coordenador', 'pesquisador', 'gestor'),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING(1234),
                allowNull: true,
            },
            formation:{
                type: DataTypes.STRING(1234),
                allowNull: true,
            },
            curriculum:{
                type: DataTypes.TEXT,
                allowNull: true,
            },
            associated_institution:{
                type: DataTypes.STRING,
                allowNull: true,
            },
            link_curriculum:{
                type: DataTypes.STRING,
                allowNull: true,
            }
    })

    return User;
}