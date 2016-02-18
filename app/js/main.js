require.config({
	paths: {
		jquery: 'libs/jquery/jquery-2.2.0-min',
		underscore: 'libs/underscore/underscore-1.8.3-min',
		backbone: 'libs/backbone/backbone-1.2.3-min',
        localstorage: 'libs/localstorage/backbone.localStorage-min',
        templates: '../templates',
        backbonepaginator: 'libs/backbone.paginator/backbone.paginator.min',
        bootstrap: 'bootstrap.min'
	},
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'jquery': {
            exports: '$'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'viewmanager': {
            exports: 'VM'
        },
    }
});

require([
	'app',
], function(App) {
		App.initialize();
});