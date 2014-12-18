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
			//this.prototype.constructor.call(this);
			this.playerProperty = 42;

			// this.super.constructor(arguments);
		};

		Player.prototype = Engine.getEntityFactory().createEntity('SimpleShape');
		Player.prototype.test = function(){

		};

		console.log( new Player());
		//var world = Framework.events.

	});
});
