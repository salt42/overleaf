var req = require.config({
	context: 'test',
	packages: [
		{
			name: 'marioEngine',
			location: 'libs/mario'
		}
	]
});


req(["require", 'marioEngine'], function(require, Engine){
	Engine.onReady(function() {

		function Player () {
			// this.super.constructor(arguments);
		};

		Player.prototype.test = function(){

		};

		Player.prototype = Engine.getEntityFactory().createEntity('SimpleShape', Player.prototype);
		console.log( new Player());
		//var world = Framework.events.

	});
});
