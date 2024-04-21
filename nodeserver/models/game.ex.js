'use strict'

var mongoose = require('mongoose');
const bCrypt = require('bcrypt');
var Schema = mongoose.Schema;  
 
 
 
 
 var UserSchema =new Schema({
	    players_count:Number,
	    deck:Array,
        active_suit:String,
        attacker:Array,
        defender:Array,
        players:[[],[],[],[]],
        passes:Number,
        target:Number,
        deck_id:Array,
        roles:Array,
        iid:String,
        name:String,
        cach:[[],[],[],[]],
        deck_back:Array,
        passes:Number,
		},{ versionKey: false })
		
		
		
		module.exports = mongoose.model('Dum', UserSchema);