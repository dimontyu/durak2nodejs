'use strict'


const uuid = require('uuid');
exports.login= function(req,res,map) {
  //
  // "Log in" user and set userId to session.
  //
  const id = uuid.v4();

  console.log(`Updating session for user ${id}`);
  req.session.userId = id;
  res.send({ result: 'OK', message: 'Session updated' });
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

