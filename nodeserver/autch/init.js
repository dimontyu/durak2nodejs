'use strict'
const User = require('../models/user');
const bCrypt = require('bcrypt');
const uuid = require('uuid');
module.exports = async function (req, res, userId) {
   // console.log(req.session.userId)
    if (!req.body) return res.sendStatus(400);
   // console.log(req.body)
    let user_name = (req.body.name === "GamerX") ?null : req.body.name;
    
    let password = req.body.password;
    let user = user_name? await User.findOne({ name: user_name }): await User.findOne({ token: req.body.token });
    let inithashed = user && user_name ? initHash(password,user):false;
    if (user && inithashed ) {
        let message = { result: 'OK', 'type': 'susses', name: user.name, token: user.token }
        user.session_id = userId; await user.save()
        console.log(message)
        // await res.send(message)
        return message
    }
    if (user && (req.body.name === "GamerX")) {
        let message = { result: 'OK', 'type': 'susses', name: user.name, token: user.token }
        user.session_id = userId; await user.save()
        console.log(message)
        // await res.send(message)
        return message
    }
    //use anonimus
    if (!user) {
        let user_password = req.body.password;
        let hashed = createHash(user_password); 
        let join_key = uuid.v4()
        let user = new User({ name: req.body.name, hash: hashed, token: join_key, frends_name: [], postmessage: [], email: '', session_id: userId })
        await user.save();
        let message = { result: 'OK', 'type': 'susses', name: user.name, token: user.token }
        return message;
    }
    else {
      
        let message = { result: 'OK', 'type': 'susses','done':"invalid password" }
        console.log(message)
        //await res.send(message)
        return message
    }
}



let initHash = function (password,user) {
    return bCrypt.compareSync(password, user.hash);
}

let createHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}