define([
    'jquery',
    'underscore',
    'backbone',
    'views/gallery/GalleryMetaDataView',
    'text!templates/gallery_list.html'

    ], function($,_,Backbone,  GalleryMetaDataView, GalleryListTemplate){
        var GalleryMetaDataListView = Backbone.View.extend({
           
           
            initialize: function(){
                var view = this;
                this.collection.fetch({

                    success: function(collection, response,options){
                        view.render();
                    },
                    error: function(){
                        console.log("GalleryListView failed to fetch galleries");
                    }
                });

            },

            render: function(){
                

                this.collection.each(function(gallery){
        
                    var galleryMetaDataView = new GalleryMetaDataView({model: gallery});
                    this.$el.append(galleryMetaDataView.render().el);

                },this);


                $('#gallery-table').prepend(GalleryListTemplate);
             


                return this;
            }

        });
        return GalleryMetaDataListView;

    });