define([
    'jquery',
    'underscore',
    'backbone',
    'models/photo/PhotoModel'
    ], function($,_,Backbone, PhotoModel){

        var PhotoCollection = Backbone.Collection.extend({

            model: PhotoModel,

            tagName:'yumm',

            url: 'http://localhost:3000/photo_collections/2',

           sync: function(method, model, options) {
             var params = _.extend({
                type: 'GET',
                dataType: 'jsonp',
                url: model.url,
                processData: true,

            }, options);

            return $.ajax(params);
            },

            parse: function(response){
                return response;

            }

        });

        return PhotoCollection;
    });