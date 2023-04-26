const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(
  {
    username: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
    dialect: 'mysql',
    port: process.env.MYSQLPORT,
    host: process.env.MYSQLHOST
  }
)

module.exports = sequelize;