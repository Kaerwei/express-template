const jwt = require('jsonwebtoken');
const CONFIG = require('../config');

// 生成token
exports.generateToken = function (id) {
    let payload = { id: id, time: new Date() };
    let token = jwt.sign(
        payload,
        CONFIG.TOKEN_SECRET,
        {
            expiresIn: 60 * 60 * 24 * 30
        });

    return token;
}

// 解码token
exports.verifyToken = function (e) {
    let payload = jwt.verify(e, CONFIG.TOKEN_SECRET);
    return payload;
}