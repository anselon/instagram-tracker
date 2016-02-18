define([
    'jquery',
    'underscore',
    'backbone',
    'collections/photos/PhotoCollection'
    ], function($,_,Backbone, PhotoCollection){

        var GalleryModel = Backbone.Model.extend({
            urlRoot: 'https://intense-plains-15719.herokuapp.com/photo_collections/',
            defaults: {
                tag: '',
                start_date: new Date(),
                end_date: new Date()
            },
            requestType: 'GET',
            

            initialize: function(tag){
              
                var photos = new PhotoCollection({ gallery_id: this.id});
                this.set('photos', photos);

                 this.fetch({
                    success: function(){
                    },
                    error: function(){}
                });

            },

            toJSONWithDate: function(){
                var galleryModel = this.toJSON();
                var start = new Date(galleryModel.start_date);
                var end = new Date(galleryModel.end_date);
                galleryModel.pretty_start_date = start.toDateString();
                galleryModel.pretty_end_date = end.toDateString();
                return galleryModel;
            },




            create: function(data) {
               return $.ajax({
                    type: "POST",
                    url: this.urlRoot,
                    data: JSON.stringify(data),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function(data){alert(New collection successfully created.);},
                    failure: function(errMsg) {
                        consol.log(errMsg);
                    }
                });

            },
            sync: function(method, model, options) {
             var params = _.extend({
                dataType: 'json',
                url: model.url(),
                processData: true,
              

            }, options);

            return $.ajax(params);
            },

        });

        return GalleryModel;
    });