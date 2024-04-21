'use strict'
 module.exports=function(wss,ws,WebSocket,userId,MSG){
let msg=JSON.stringify({'m':MSG?.m,'uid':userId})

	 wss.clients.forEach(function each(client) {
       if (client !== ws && client.readyState === WebSocket.OPEN)  {
        client.send(msg.toString());
      }
 });
 }