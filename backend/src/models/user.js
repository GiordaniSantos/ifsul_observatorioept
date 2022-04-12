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
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(1234),
                allowNull: false,
            },
            associated_institution:{
                type: DataTypes.STRING,
                allowNull: true,
            },
            jwtVersion: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
            },
    });

//    User.associate = (models) => {
//       User.belongsTo(models.Curriculum, {foreignKey: 'userId'})
 //   };

    User.prototype.toJSON = function() {
        const values = { ...this.get() };
        delete values.password;
        return values;
    };

    return User;
}