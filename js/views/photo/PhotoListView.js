define([
    'jquery',
    'underscore',
    'backbone',
    'views/photo/PhotoView',
    'collections/photos/PhotoCollection',
    'text!templates/photo.html'
    ], function($,_,Backbone, PhotoView, PhotoCollection, PhotoGridTemplate){
        var PhotoListView = Backbone.View.extend({
            tagName: 'ul',

            initialize: function(){
                var view = this;
                this.collection.fetch({
                    data: { page: this.page },
                    traditional: true,
                    success: function(collection, response,options){
                        view.render();
                    },
                    error: function(){
                        console.log("PhotoListView failed to fetch photos");
                    }
                });

            },

            render: function(){

                this.collection.each(function(photo){

                    // TODO: handle zombie views, once pagination is added.
                    var photoView = new PhotoView({model: photo});
                    this.$el.append(photoView.render().el);

                }, this);

                return this;
            }

        });
        return PhotoListView;

    });