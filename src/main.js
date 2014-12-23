/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4 */
/*global define, requirejs */
define(function() {

	var req = requirejs.config({
		context: 'test',
		baseUrl: 'src',
		packages: [
			{
				name: 'marioEngine',
				location: '../libs/mario'
			},
		]
	});

	req(['marioEngine'], function(Engine){
		Engine.onReady(function() {
			req(['entryPoint'], function(EntryPoint){
				EntryPoint.init();
			});
		});
	});

});
