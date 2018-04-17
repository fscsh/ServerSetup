const Authen = require('./controllers/authen');


module.exports = function(app) {
    app.post('/signup', Authen.signup)
}
