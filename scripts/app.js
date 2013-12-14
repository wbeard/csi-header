require.config({
	baseUrl: "scripts",
        shim: {
                underscore: {
                        exports: '_'
                },
                backbone: {
                        deps: [
                                'underscore',
                                'jquery'
                        ],
                        exports: 'Backbone'
                }
        },
	paths: {
                text: './lib/require/text',
		app: "./app",
		jquery: 'lib/jquery-1.10.2',
                bootstrap: '../bootstrap/js/bootstrap',
                config: 'app/config',
                underscore: 'lib/underscore',
                backbone: 'lib/backbone',
                collections: './app/collections',
                views: './app/views',
                models: './app/models',
                templates: './app/templates'
	}
});

require(["app/main"]);