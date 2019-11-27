require('dotenv').config()

module.exports = {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        timezone: 'America/Belem'
    }
}
