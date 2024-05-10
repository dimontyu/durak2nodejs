'use strict'
 module.exports=function(wss,map,ws,WebSocket,userId,MSG){
    
   
     let client = map.get(MSG.id);
     let msg = JSON.stringify(MSG)
     if (client && client.readyState === WebSocket.OPEN) {
         MSG.id = userId
         client.send(msg.toString());
     }
     else if (!client) {
         wss.clients.forEach(function each(client) {
          if (client !== ws && client.readyState === WebSocket.OPEN)  {
            client.send(msg.toString());
           }
     }); }
 }