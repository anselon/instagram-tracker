define([
    'jquery',
    'underscore',
    'backbone',
    'models/gallery/GalleryModel'
    ], function($,_,Backbone, GalleryModel){

        var GalleryCollection = Backbone.Collection.extend({

            model: GalleryModel,

            

            url: 'https://intense-plains-15719.herokuapp.com/photo_collections',

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

        return GalleryCollection;
    });