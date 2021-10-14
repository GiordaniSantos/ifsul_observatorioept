module.exports = (sequelize, DataTypes) => {
    const Member = sequelize.define('Member', {
        member_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        institution: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link_curriculum:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    });

    Member.prototype.toJSON = function() {
        const values = { ...this.get() };
        delete values.password;
        return values;
    };

    return Member;
}