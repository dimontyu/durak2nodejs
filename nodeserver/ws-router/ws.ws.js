'use strict'
let ChatGame = require('../chat/chat');
let Game_connekt = require('../game/du');
//let Game_game = require('../game/du.game');

exports.message = async function (ws, message, WebSocket, wss, userId, map, Game, path) {
    let MSG = JSON.parse(message);
    let type = MSG?.type;
    console.log(Game?.size)
    console.log(path)

    switch (type) {
        case 'chat':
            //ChatGame(wss, ws, WebSocket, userId, MSG);
            ChatGame(wss, map, ws, WebSocket, userId, MSG);
            break;
        case 'start': Game?.size >= path ? Game_connekt(userId, map, Game, path): null;
            break;
       
        case 'hi':
            let msg = JSON.stringify({ "id": userId, connect: "connect" });
            ws.send(msg.toString());

            break;
        default:
            //console.log(`Sorry, we are out of ${type}.`);
            return 0;
    };
};