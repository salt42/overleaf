var req = require.config({
	context: 'test',
	packages: [
		{
			name: 'game',
			location: 'libs/mario',
			main: 'bootGameEngine'
		}
	]
});

req(["require", 'game'], function(require, Game){
	console.log(Game)
});