
let Game_game = require('./du.game');


module.exports =class Player{
   constructor(durak,D_id,map){
       this.players=D_id;	
       this.durak=durak;
       this.map=map;
       this.Message=this.Message.bind(this);	
       this.init(this.durak,this.map);	
    }
init(durak,map){
let i = 0;	
    for (const item of this.players) {

		durak.id = item;
		durak.target = i;

		let msg = JSON.stringify(durak);
		let client = map.get(item);
		client.on('message',(message)=>{this.Message(message,map,durak ) });
		client.on('close', function () { durak = null;});
		client ? client.send(msg.toString()) : null;
i += 1
    }
};
async Message(message, map, durak) {
	let MSG = JSON.parse(message);
	let type = MSG?.type;
	if (type === 'set' && durak !==null) {
	await Game_game(MSG, map, durak);
	}
	if (type === 'set' && durak === null) {
		console.log("GAME OVER");
	}
 };


	};	
