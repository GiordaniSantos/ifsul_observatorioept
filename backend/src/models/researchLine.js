module.exports = (sequelize, DataTypes) => {
    const ResearchLine = sequelize.define('ResearchLine', {
        researchLine_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            }
    })

    return ResearchLine;
}