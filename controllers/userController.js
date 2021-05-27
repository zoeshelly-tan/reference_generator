const db = require("../models");
// const bcrypt = require('bcryptjs');
const User = require('../models/User')
import ReactSession from 'react-client-session';


module.exports = {
    createUser: async => {
        try {
            const existingUser = await User.findOne({ email: res.body.userInput.email });
            if (existingUser) {
                throw new Error('User exists already.');
            }
            db.User.create(req.body)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        }
        catch (err) {
            res.status(500).json(err);
        }
        try {
            const dbUserData = await User.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            });
            req.Session.save(() => {
                req.session.user_id = userData.id
                ReactSession.loggedIn = true;

                res.status(200).json(dbUserData);
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },


    login: async => {
        try {
            const dbUserData = await User.findOne({
                where: {
                    email: req.body.email,
                },
            });
            if (!dbUserData) {
                res
                    .status(400)
                    .json({ message: 'Incorrect email or password. Please try again!' });
                return;
            }
            const validPassword = await dbUserData.checkPassword(req.body.password);

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
            console.log(err);
            res.status(500).json(err);

        }
        router.post('/logout', (req, res) => {
            // When the user logs out, destroy the session
            if (req.Session.loggedIn) {
                req.Session.destroy(() => {
                    res.status(204).end();
                });
            } else {
                res.status(404).end();
            }
        });

    }
};