define(function(require, exports, module)  {
	var Engine = require('marioEngine');

	function Player() {

	}
	Player.prototype = Engine.getEntityFactory().createEntity('SimpleShape');
	Player.constructor = Player;
	Player.prototype.schitt = function() {
		this._parent.render();
	};
	module.exports = Player;
});
		