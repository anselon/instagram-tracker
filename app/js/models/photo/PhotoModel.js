define([
    'jquery',
    'underscore',
    'backbone',
    ], function($,_,Backbone){
        var PhotoModel = Backbone.Model.extend({
            defaults: {
                username: '',
                src_link: '',
                native_link: '',
                caption: ''
            }
        });
        return PhotoModel;
    });