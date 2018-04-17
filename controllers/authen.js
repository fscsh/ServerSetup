const User = require('../models/users');

exports.signup = function(req,res,next){
    // console.log(req.body);
    // res.send({ success: 'asd'})
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email }, function(err,existingUser){
        if (!email || !password) {
            return res.status(422).send({ error :'You must provide Email and password '});

        }
        if (err) {
            return next(err);
        }
        if (existingUser) {
            return res.status(422).send({ error :'Email is in use'});
        }
        const user  = new User({
            email: email,
            password: password
        })
        user.save(function(err){
            if (err) {return next(err);}
            res.json(user);
        });
    });


}
