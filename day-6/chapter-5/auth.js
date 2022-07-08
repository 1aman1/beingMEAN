
function auth (req, resp, next) {
    console.log('auth..')
    next();
}

module.exports = auth