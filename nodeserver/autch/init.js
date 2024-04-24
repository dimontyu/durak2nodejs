'use strict'
const User = require('../models/user');
const bCrypt = require('bcrypt');
const uuid = require('uuid');
module.exports = async function (req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body)
    let user_name = req.body.user;
    let password = req.body.password;
    let user = await User.findOne({ name: user_name });
    let inithashed = user? initHash(password,user):null;
    if (user && inithashed ) {
        let message = { 'type': 'susses', 'done': "ok",name:user.name }

        await res.send(message)
    }
    else {
      
        let message = { 'type': 'susses','done':"invalid password" }

        await res.send(message)
    }
}



let initHash = function (password,user) {
    return bCrypt.compareSync(password, user.hash);
}