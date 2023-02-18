class BaseModel {
    constructor(data, message) {
        // 如果传入数据只有字符串
        if (typeof data === 'string') {
            // message 改成传入的数据
            this.message = data
            // data设为null
            data = null
            // message 也设为null，后面的判断语句不会再执行
            message = null
        }
        if (data) this.data = data
        if (message) this.message = message
    }
}

class SuccessModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        // 集成BaseModel的对象，添加新的key
        this.errno = 0
    }
}

class ErrorModel extends BaseModel {
    constructor(data, message) {
        super(data, message)
        this.errno = -1
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}