'use strict'
 module.exports=function(wss,map,ws,WebSocket,userId,MSG){
    
     //let msg = JSON.stringify(MSG)

	// wss.clients.forEach(function each(client) {
    //   if (client !== ws && client.readyState === WebSocket.OPEN)  {
    //    client.send(msg.toString());
    //  }
     //});
     let client = map.get(MSG.id);
     MSG.id = userId
     let msg = JSON.stringify(MSG)
     client.send(msg.toString());
 }