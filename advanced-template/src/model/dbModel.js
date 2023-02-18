const mongoose = require('mongoose')
const db = require('../db/mongoDB')

const Schema = mongoose.Schema;

// 用户表
const UserSchema = new Schema({
    account: String,
    pwd: String,
})

exports.User = db.model('User', UserSchema);
