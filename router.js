const Authen = require('./controllers/authen');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt',{ session: false });
const requireSignin = passport.authenticate('local',{ session: false })

module.exports = function(app) {
    app.get('/',requireAuth,function(req,res){
        res.send({ message: 'secret code is shuhao,hahaha'})
    })
    app.post('/signin', requireSignin, Authen.signin)
    app.post('/signup', Authen.signup)
}
