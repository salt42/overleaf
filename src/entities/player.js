/* jslint vars: true, esnext: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/* global define */
define(function(require, exports, module)  {
	"use strict";
	var Engine = require('marioEngine');

	function Player() {
		this.__proto__._parent.constructor.call(this)
	}

	Player.prototype = Engine.getEntityManager().getEntityFactory().inheritFrom('Entity');
	Player.prototype.constructor = Player;
	Player.prototype.render = function(ctx) {
//        ctx.translate(this.pos.x, this.pos.y);
        ctx.fillStyle = 'red';//this.color;
//        ctx.fillRect(-this.getCenter().x, -this.getCenter().y, this.width, this.height);
        ctx.fillRect(-10, -10, 20, 20);
	};
	Player.prototype.update = function(time) {
		this.angle = this.angle + time/4;
	};
	module.exports = Player;
});
