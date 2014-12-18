define(function(require, exports, module)  {
    var Engine = require('marioEngine'),
        Player = require('entities/player');



    exports.init = function() {
        var core = Engine.getCore();
        core.setDOM($('#dsadsad'));

        var world = core.createWorld();
        //fill world
        var player = new Player();
        world.addEntity(player);
        world.addEntity(new BlaEntity());
        world.addEntity(new BlaEntity());
        world.addEntity(new BlaEntity());
        // ...
        Engine.getEventManager()

        core.setActiveWorld(world);
        core.registerGameLoopTick(1, function() {});
        core.start();

    };
});
