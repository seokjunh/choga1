const Sequelize = require('sequelize');

module.exports = class Locate extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      rankid: {
        type: Sequelize.INTEGER,
      },
      locateid: {
        type: Sequelize.INTEGER,
      },
      dust: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      no2: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      o3: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      co: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      checkday: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },

    }, {
      sequelize,
      // tableName: 'tableName', // table명을 수동으로 생성 함
      // freezeTableName: true, // true: table명의 복수형 변환을 막음
      underscored: true, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: true, // deletedAt
    });
  }

  // static associate(db) {
  //   db.Airinfo.belongsTo(db.Locate, { foreignKey: { name: 'airinfoId', onDelete: 'SET NULL', as: 'locate' } });
  // }
  // static includeAttributes = ['id','title','active','createdAt'];
};
