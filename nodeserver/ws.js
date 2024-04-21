'use strict';
require('dotenv').config();
const session = require('express-session');
const express = require('express');
const http = require('http');
var cors = require('cors')
const mongoose = require('mongoose');
const {WebSocket, WebSocketServer } = require('ws');
const autch=require('./autch/autch');
const connect=require('./connect');
//import WebSocket, { WebSocketServer } from 'ws';

function onSocketError(err) {
  console.error(err);
}

const app = express();
 const map = new Map();

//
// We need the same instance of the session parser in express and
// WebSocket server.
let RedisStore = require("connect-redis").default;
const { createClient } = require("redis");


// Initialize client.
let redisClient = createClient();
redisClient.connect().catch(console.error);

// Initialize store.
let redisStore = new RedisStore({
  client: redisClient
  
});
//

const sessionParser = session({
  store: redisStore,
  saveUninitialized: false,
  secret: '$eCuRiTy',
    resave: false,
   
});

//
// Serve static files from the 'public' folder.
//
app.use(cors())

app.use(express.static('public'));
app.use(sessionParser);
app.post('/login', function(req,res){ let n=map ; autch.login(req,res,n)});
app.delete('/logout',function(req,res){let n=map ;  autch.logout(req,res,n)});
app.post('/lg',function(req,res){ autch.loginGET(req,res)});

var dev_db_url =process.env.MONGODB_URI;
var LmongoDB = 'mongodb://localhost:27017/durak';
var mongoDB = LmongoDB;//dev_db_url
//var mongoDB = 'mongodb://localhost:27017/' 
mongoose.connect(mongoDB, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }).catch(error => handleError(error));
mongoose.Promise = global.Promise;

//
// Create an HTTP server.
//
const server = http.createServer(app);

//
// Create a WebSocket server completely detached from the HTTP server.
//
const wss = new WebSocketServer({noServer: true });

server.on('upgrade', function (request, socket, head) {
  socket.on('error', onSocketError);

  console.log('Parsing session from request...');

  sessionParser(request, {}, () => {
    if (!request.session.userId) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    console.log('Session is parsed!');

    socket.removeListener('error', onSocketError);

    wss.handleUpgrade(request, socket, head, function (ws) {
      wss.emit('connection', ws, request);
    });
  });
});



wss.on('connection', function (ws,request) {connect.connect(WebSocket,wss,ws,map,request)})





//
// Start the server.
//
server.listen(8001, function () {
  console.log('Listening on http://localhost:8080');
});