'use strict'
let ChatGame=require('../chat/chat');
let Game_mongo=require('../game/durak.mongo');
let Game_game=require('../game/durak.game');

exports.message=async function(ws,message,WebSocket,wss,userId,map,Game,path){
let MSG=JSON.parse(message);
let type=MSG?.type;
console.log(Game?.size)
console.log(path)

switch (type) {
  case 'chat':
ChatGame(wss,ws,WebSocket,userId,MSG);
    break;
  case 'start':Game?.size>=path?Game_mongo(userId,map,Game,path):null;
  break;
  case 'set':
   Game_game(MSG,map);
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  case 'hi':
  let msg=JSON.stringify({"id":userId,connect:"connect"});
   ws.send(msg.toString());
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
console.log(`Sorry, we are out of ${type}.`);
};	

	
	 
	 
	 
	 
	
  }
  
  
  
  