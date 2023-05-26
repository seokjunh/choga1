const Sequelize = require('sequelize');

module.exports = class Rank extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      rank: {
        type: Sequelize.INTEGER,
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
    db.Rank.hasMany(db.Airinfo, { foreignKey: { name: 'rankId', onDelete: 'SET NULL', as: 'Airinfos' } });
    db.Rank.hasMany(db.Act, { foreignKey: { name: 'rankId', onDelete: 'SET NULL', as: 'Acts' } });
  }
};