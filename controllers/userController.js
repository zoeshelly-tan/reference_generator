const db = require("../models");
require('../models/User');
const mongoose = require('mongoose');

let User = mongoose.model('User');
// const connStr = 'mongodb://localhost:27017/mongoose-bcrypt-test';
// mongoose.connect(connStr, function (err) {
//     if (err) throw err;
//     console.log('Successfully connected to MongoDB');
// });

// const testUser = new User({
//     username: 'jmar777',
//     password: 'Password123'
// });

// testUser.save(function (err) { 
//     if (err) throw err;
// })

// User.findOne({ username: 'jmar777' }, function(err, user) {
//     if (err) throw err;

//     // test a matching password
//     user.comparePassword('Password123', function(err, isMatch) {
//         if (err) throw err;
//         console.log('Password123:', isMatch); // -&gt; Password123: true
//     });

//     // test a failing password
//     user.comparePassword('123Password', function(err, isMatch) {
//         if (err) throw err;
//         console.log('123Password:', isMatch); // -&gt; 123Password: false
//     });
// })

module.exports = {
    login: async (req, res, next) => {
        try {
            console.log(req.body.username);

            // const test = new User({
            //     username: 'she',
            //     password: '1234'
            // })

            // await test.save();

            const dbUserData = await User.findOne({ username: req.body.username });

            console.log(dbUserData);

            if (!dbUserData) {
                res
                    .status(400)
                    .json({ message: 'Incorrect email or password. Please try again!' });
                console.error(`no such user: ${req.body.username} in database`)
                return;
            }
            const validPassword = await dbUserData.comparePassword(req.body.password);

            console.log("password : " + validPassword);

            if (!validPassword) {
                res
                    .status(400)
                    .json({ message: 'Incorrect email or password. Please try again!' });

                console.error("password is incorrect for user");
                return;
            }

            // login success
            res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });

        } catch (err) {
            console.log(err);
            res.status(500).json(err);

        }
    }
};