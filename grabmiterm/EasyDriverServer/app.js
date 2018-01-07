const express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken'),
    SECRET_KEY = require('./config'),
    getDriverInfo = require('./firebase');

const cors = require('./middle-wares/cors');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors);

app.get('/', (req, res) => {
    res.json({
        message: 'hello'
    });
});

app.post('/login', (req, res) => {
    let user = {
        id: req.body.id,
        pwd: req.body.pwd
    };
    console.log(user)
    getDriverInfo(user.id)
        .then((result) => {
            if (user.id === result.userInfo.username && user.pwd === result.userInfo.password) {
                let token = jwt.sign(user, SECRET_KEY, {
                    expiresIn: 31536000
                });
        
                res.json({
                    access_token: token,
                    userId: result.key,
                    username: result.userInfo.name
                });
            } else {
                res.statusCode = 401;
                res.json({
                    error: true,
                    message: 'login failed'
                });
            }
        })
        .catch((err) => {console.log(err)})
});

const fn_verify = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
        jwt.verify(token, SECRET_KEY, (err, payload) => {
            if (err) {
                res.statusCode = 401;
                res.json({
                    error: true,
                    message: 'verify failed',
                    error_message: err
                });
            } else {
                req.token_payload = payload;
                next();
            }
        });
    } else {
        res.statusCode = 403;
        res.json({
            error: true,
            message: 'no token found'
        });
    }
};

const PORT = 3000;
app.listen(PORT, () => {
    console.log('api run on port: ' + PORT);
});