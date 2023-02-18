const env = process.env.NODE_ENV

let CONFIG = {
    SESSION_SECRET: 'qwzxubH!_YsSDFEC',
    TOKEN_SECRET: 'KA_ER_WEI'
}

if (env === 'dev') {
    // mongodb配置
    // mongodb://admin:password@host:port/database
    CONFIG.MONGODB_CONF = {
        admin: '',
        password: '',
        host: '',
        port: 27017,
        database: ''
    }
    // redis配置
    CONFIG.REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}

if (env === 'production') {
    CONFIG.MONGODB_CONF = {
        admin: '',
        password: '',
        host: '',
        port: 27017,
        database: ''
    }
    CONFIG.REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}

module.exports = CONFIG