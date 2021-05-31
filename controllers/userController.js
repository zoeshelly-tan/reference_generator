const db = require("../models");
require('../models/User');
const mongoose = require('mongoose');

let User = mongoose.model('User');


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