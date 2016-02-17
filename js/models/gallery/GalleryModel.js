define([
    'jquery',
    'underscore',
    'backbone',
    'collections/photos/PhotoCollection'
    ], function($,_,Backbone, PhotoCollection){

        var GalleryModel = Backbone.Model.extend({
            urlRoot: 'http://localhost:3000/photo_collections/',
            defaults: {
                id: 1,
                tag: '',
                start_date: new Date(),
                end_date: new Date()
            },
            

            initialize: function(tag){
              
                var photos = new PhotoCollection({ gallery_id: this.id});

                this.set('photos', photos);

            },

            toJSONWithDate: function(){
                var galleryModel = this.toJSON();
                var start = new Date(galleryModel.start_date);
                var end = new Date(galleryModel.end_date);
                galleryModel.pretty_start_date = start.toDateString();
                galleryModel.pretty_end_date = end.toDateString();
                return galleryModel;
            },

            sync: function(method, model, options) {
             var params = _.extend({
                type: 'GET',
                dataType: 'jsonp',
                url: model.url(),
                processData: true,

            }, options);

            return $.ajax(params);
            },

        });

        return GalleryModel;
    });