'use strict'


const uuid = require('uuid');
const init = require('./init');
exports.login=async function(req,res,map) {
    console.log(req.body.name)
  const id = uuid.v4();

  console.log(`Updating session for user ${id}`);
    req.session.userId = id;
 let msg=await init(req,res,id)
  res.send(JSON.stringify(msg));
};

exports.logout=function(request,response,map) {
  const ws = map.get(request.session.userId);

  console.log('Destroying session');
  request.session.destroy(function () {
    if (ws) ws.close();

    response.send({ result: 'OK', message: 'Session destroyed' });
  });
};

exports.loginGET= function(request,response) {

    if (!request.session?.userId) {
     response.send({ result: 'nOK', message: 'Session destroyed' });
    }
    else {
        response.send({ result: 'OK', message: 'Session connect connect' });
    console.log('Session is connect!');
}
  
};

