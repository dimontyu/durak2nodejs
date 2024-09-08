'use strict';
require('dotenv').config();
const session = require('express-session');
const express = require('express');
const http = require('http');
var cors = require('cors')
const mongoose = require('mongoose');
const {WebSocket, WebSocketServer } = require('ws');
const autch = require('./autch/autch');
const register = require('./autch/registration');
const init = require('./autch/init');
const connect=require('./connect');
//import WebSocket, { WebSocketServer } from 'ws';
const bodyParser = require('body-parser');
function onSocketError(err) {
  console.error(err);
}

const app = express();
 const map = new Map();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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
app.post('/login', (req,res)=> autch.login(req,res,map));
app.delete('/logout',(req,res)=> autch.logout(req,res,map));
app.post('/lg', (req,res)=> autch.loginGET(req,res));
app.post('/register',(req,res)=> register(req,res));
//app.post('/init', cors(), jsonParser, function (req, res) { init(req, res) });

var dev_db_url =process.env.MONGODB_URI;
var LmongoDB = 'mongodb://localhost:27017/durak';
var mongoDB = dev_db_url??LmongoDB;//dev_db_url
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
//app.listen(process.env.APP_PORT, process.env.APP_IP);
const PORT = process.env.APP_PORT;
const IP = process.env.APP_IP;
server.listen(PORT,IP, function () {
  console.log('Listening on'+PORT);
});