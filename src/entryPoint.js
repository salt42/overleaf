define(function(require, exports, module)  {
    var Engine = require('marioEngine'),
        Player = require('entities/player');



    exports.init = function() {
        var Core = Engine.getCore();
        Core.setDOM($('#myCanvas'));

        var world = Core.createWorld();

		//world.
		var player = new Player();
		var layer = Core.createLayer();
		layer.add(player);
		world.addLayer(layer);


        Core.setActiveWorld(world);

        Core.start();

    };
});
