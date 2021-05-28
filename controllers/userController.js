const db = require("../models");
// const bcrypt = require('bcryptjs');
const User = require('../models/User')
// import ReactSession from 'react-client-session';
const mongoose = require('mongoose');

const connStr = 'mongodb://localhost:27017/mongoose-bcrypt-test';
mongoose.connect(connStr, function (err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});

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
    login: async (req, res,next) => {
        try {
            console.log(req.body.username);
            console.log(User.body.username + "123")
            const dbUserData = await User.findOne({ username: req.body.username });
            if (err) {
                console.error("Database find email error: " + err);
                return next(err);
            }
            if (!dbUserData) {
                // if (User.username = dbUserData) {
                res
                    .status(400)
                    .json({ message: 'Incorrect email or password. Please try again!' });
                alert("Incorrect email or password. Please try again!")
                console.log("err")
                return;
            }
            const validPassword = await User.comparePassword(req.body.password);

            if (!validPassword) {
                res
                    .status(400)
                    .json({ message: 'Incorrect email or password. Please try again!' });
                return;
            }


            req.Session.save(() => {
                req.Session.loggedIn = true;

                res
                    .status(200)
                    .json({ user: dbUserData, message: 'You are now logged in!' });
            });
        } catch (err) {
            console.log("53hello");
            res.status(500).json(err);

        }
        // router.post('/logout', (req, res) => {
        //     // When the user logs out, destroy the session
        //     if (req.Session.loggedIn) {
        //         req.Session.destroy(() => {
        //             res.status(204).end();
        //         });
        //     } else {
        //         res.status(404).end();
        //     }
        // });

    }
};