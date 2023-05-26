const { sequelize } = require('./connection');
const Locate = require('./locate');
const AirInfo = require('./airInfo');
const Rank = require('./rank');
const Act = require('./act');

const db = {};

db.sequelize = sequelize;

// model 생성
db.Locate = Locate;
db.AirInfo = AirInfo;
db.Rank = Rank;
db.Act = Act;

// model init
Locate.init(sequelize);
AirInfo.init(sequelize);
Rank.init(sequelize);
Act.init(sequelize);
// // 관계생성

Locate.associate(db);
AirInfo.associate(db);
Rank.associate(db);
Act.associate(db);

module.exports = db;
