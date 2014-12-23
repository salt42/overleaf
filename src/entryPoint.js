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



//        var core = Engine.getCore()
//			.setDOM($('#dsadsad'))
//			.setDebbug(true);
//
//        var world = core.createWorld();
//        //fill world
//        var player = new Player();
//        world.addEntity(player);
//        world.addEntity(new BlaEntity());
//        world.addEntity(new BlaEntity());
//        world.addEntity(new BlaEntity());
//        // ...
//        Engine.getEventManager()
//			.entityOn(Entity, 'eventType');
//
//
//        core.setActiveWorld(world);
//        core.registerGameLoopTick(1, function() {});
//        core.start();
//
//		/*
//		 *	Entity needs uniq _id
//		 */
//        function createWorld() {
//            //private
//            var _layer = [];
//
//            function doSomethingPrivate() {}
//            //public
//            function World() {
//
//            }
//            /*
//             *  @param {Scene} scene object
//             */
//            World.prototype.addLayer = function (scene) {
//            };
//            /*
//             *  @param {number} layerID
//             *  @param {Scene} scene object
//             */
//            World.prototype.setLayer = function (layerID, scene) {
//            };
//            /*
//             *  @param {number} layerID
//             */
//            World.prototype.removeLayer = function (layerID) {
//            };
//            /*
//             *  @param {number} layerID
//             *  @param {Scene} scene object
//             */
//            World.prototype.transitstTo = function (layerID, scene) {
//            };
//            World.prototype.addLayer = function () {
//            };
//            return new World();
//        }
//        function createScene() {
//            //private
//            var _entities = new EntityList();
//
//            function doSomethingPrivate() {}
//            //public
//            function Scene() {
//
//            }
//            /*
//             *  @param {Entity} entity
//             */
//            Scene.prototype.addEntity = function (entity) {
//            };
//            /*
//             *  @param {number} entityID
//             */
//            Scene.prototype.removeEntity = function (entityID) {
//            };
//            /*
//             *  @param {number} time as UNIX timestamp
//             */
//            Scene.prototype.updateTick = function (time) {
//            };
//            return new Scene();
//        }
//        function createEntityList() {
//            //private
//            var _items = [],
//				_itemHash = [];
//
//            function doSomethingPrivate() {}
//            //public
//            function EntityList() {
//
//            }
//            /*
//             *  @param {Entity} entity
//             */
//            EntityList.prototype.add = function (entity) {
//				if (entity instanceof Entity) {
//					var index = _items.push(entity);
//					_itemHash[entity._id] = index;
//				}
//            };
//            /*
//             *  @param {number|Entity} entityID entity id or Entity instance
//             */
//            EntityList.prototype.remove = function (entityID) {
//				if (entityID instanceof Entity) {
//					entityID = entityID._id;
//				} else if (typeof entityID !== 'number') {
//					console.error('@todo error meldung ausdenken ;)');
//					return;
//				}
//
//				var index = _itemHash[entityID];
//				return _items[index];
//            };
//
//            return new EntityList();
//        }
//
//
//
//
//
//
//
//
//
//        background
//
//        load game data / or default gameStart data
//        create world/scene with data
//        start game
//
//
//        static objects
//        enemies
//        player
//        camera
//

    };
});
