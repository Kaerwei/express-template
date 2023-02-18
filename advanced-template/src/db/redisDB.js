const redis = require('redis');
const CONFIG = require('../config')

// 创建客户端
const redisClient = redis.createClient(CONFIG.REDIS_CONF.port, CONFIG.REDIS_CONF.host);
redisClient.on('error', err => {
    console.error(err);
})

module.exports = redisClient