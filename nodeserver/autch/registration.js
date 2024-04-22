'use strict'
const User = require('../models/user');
const bCrypt = require('bcrypt');
const uuid = require('uuid');
module.exports=async function(req,res) {
    let user_name = req.body.user;
    let user_password = req.body.password;
    let result = await User.findOne({ name: user_name });
    if (result && result.name === user_name) {
        let message = { 'type': 'autorisation', 'error': "the name already exists" }
        
        await res.send(message)
    }
    else {
        let user_ind = req.body.index
        let join_key = uuid.v4()//will be needed later
        
        let hashed = createHash(user_password); 
        let uzer = new User({ name: user_name, hash:hashed, token:join_key, frends_name:[], postmessage:[], email:'' })
        await uzer.save()
        let message = { 'type': 'autorisation', 'token': join_key, 'index': user_ind, 'name': user_name }
 
        await res.send(message)
    }
}



let createHash = function (password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}