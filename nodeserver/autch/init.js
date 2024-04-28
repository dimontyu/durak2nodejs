'use strict'
const User = require('../models/user');
const bCrypt = require('bcrypt');
const uuid = require('uuid');
module.exports = async function (req, res, userId) {
    console.log(req.session.userId)
    if (!req.body) return res.sendStatus(400);
    console.log(req.body)
    let user_name = req.body.name;
    let password = req.body.password;
    let user = await User.findOne({ name: user_name });
    let inithashed = user? initHash(password,user):null;
    if (user && inithashed ) {
        let message = { result: 'OK', 'type': 'susses', name:user.name }
        user.session_id = userId;await user.save()
        // await res.send(message)
        return message
    }
    else {
      
        let message = { result: 'OK', 'type': 'susses','done':"invalid password" }

        //await res.send(message)
        return message
    }
}



let initHash = function (password,user) {
    return bCrypt.compareSync(password, user.hash);
}