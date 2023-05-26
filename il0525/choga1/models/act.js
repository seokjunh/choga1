const Sequelize = require('sequelize');

module.exports = class Act extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      rankid: {
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.INTEGER,
      },
      comments: {
        type: Sequelize.STRING(255),
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
    db.Act.belongsTo(db.Rank, { foreignKey: { name: 'rankId', onDelete: 'SET NULL', as: 'rank' } });
  }
};
