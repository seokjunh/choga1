const Sequelize = require('sequelize');

module.exports = class Locate extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: Sequelize.STRING(50),
      },
      locateX: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      locateY: {
        type: Sequelize.INTEGER,
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

  static associate(db) {
    db.Locate.hasMany(db.AirInfo, { foreignKey: { name: 'locateId', onDelete: 'SET NULL', as: 'airinfos' } });
  }
  static includeAttributes = ['name', 'locateX', 'locateY'];
};
