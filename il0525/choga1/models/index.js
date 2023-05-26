const { sequelize } = require('./connection');
const Locate = require('./locate');
const AirInfo = require('./airinfo');

const db = {};

db.sequelize = sequelize;

// model 생성
db.Locate = Locate;
db.AirInfo = AirInfo;

// model init
Locate.init(sequelize);
AirInfo.init(sequelize);

// // 관계생성

// Locate.associate(db);
// AirInfo.associate(db);
// User.associate(db);
// Board.associate(db);
// Post.associate(db);

module.exports = db;
