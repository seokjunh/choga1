const Sequelize = require('sequelize');

module.exports = class AirInfo extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      rankId: {
        type: Sequelize.INTEGER,
      },
      locateId: {
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

  static associate(db) {
    db.AirInfo.belongsTo(db.Locate, { foreignKey: { name: 'locateId', onDelete: 'SET NULL', as: 'locate' } });
    // db.Airinfo.belongsTo(db.Rank, { foreignKey: { name: 'locateId', onDelete: 'SET NULL', as: 'rank' } });
  }
  static includeAttributes = ['dust', 'no2', 'o3', 'co','checkday']
};
