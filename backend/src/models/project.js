module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('Project', {
        project_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        members:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        financiers:{
            type: DataTypes.TEXT,
            allowNull: true,
        }
    }) 

  Project.associate = (models) => {
       Project.belongsTo(models.Curriculum, {foreignKey: 'curriculumId'})
   };

//   Curriculum.associate = (models) => {
 //   Curriculum.hasMany(models.Project, {foreignKey: 'curriculumId'})
  //  };

    return Project;
};