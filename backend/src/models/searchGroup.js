module.exports = (sequelize, DataTypes) => {
    const SearchGroup = sequelize.define('SearchGroup', {
        searchGroup_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            },
            tittle: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            linked_researchers:{
               type: DataTypes.TEXT,
               allowNull: true, 
            }
    })

    return SearchGroup;
}