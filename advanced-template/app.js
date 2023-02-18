const path = require('path');

const express = require('express');
const app = express();

const createError = require('http-errors');
// session和redis
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = require('./src/db/redisDB');
const sessionStore = new RedisStore({
    client: redisClient
});

// 解决跨域问题
const cors = require('cors');
app.use(cors());

// 配置view模板
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// 记录
const logger = require('morgan')
app.use(logger('dev'))

// 解析
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// cookie
const cookieParser = require('cookie-parser');
const CONFIG = require('./src/config');
app.use(cookieParser())

// 解析session
app.use(session({
    secret: CONFIG.SESSION_SECRET,
    cookie: {
        maxAge: 24 * 7 * 60 * 60 * 1000,
    },
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}));

// 路由配置
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
})

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
})


module.exports = app;