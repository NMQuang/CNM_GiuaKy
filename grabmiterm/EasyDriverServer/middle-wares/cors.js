const methods = 'GET,PUT,POST,DELETE',
    origin = '*',
    headers = 'Origin, X-Access-Token, X-Requested-With, Content-Type, Accept';

module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', methods);
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', headers);
    next();
}