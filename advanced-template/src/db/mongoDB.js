const mongoose = require('mongoose')
const CONFIG = require('../config')
const db = mongoose.createConnection(`mongodb://${CONFIG.MONGODB_CONF.admin}:${CONFIG.MONGODB_CONF.password}@${CONFIG.MONGODB_CONF.host}:${CONFIG.MONGODB_CONF.port}/${CONFIG.MONGODB_CONF.database}`)

db.on('error', console.error.bind(console, '连接失败了'));

db.once('open', () => {
    console.info(`成功连接到数据库${CONFIG.MONGODB_CONF.database}!`);
});

db.once('close', () => {
    console.info('数据库异常关闭');
})

module.exports = db