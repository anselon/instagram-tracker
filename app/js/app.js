define([
	'jquery',
	'underscore',
	'backbone',
	'router',
	'bootstrap',
	'backbonepaginator'

], function($,_,Backbone, Router, Bootstrap, BackbonePaginator){
// pass in jQuery, underscore, backbone and router
	var initialize = function(){
		Router.initialize();

	};
	//return function to be used by other modules (export)
	return {
		initialize: initialize
	};

});