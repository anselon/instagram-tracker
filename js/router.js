define([
    'jquery',
    'underscore',
    'backbone',
    'views/HomeView',
    'models/gallery/GalleryModel',
    'views/gallery/GalleryView',
    'collections/galleries/GalleryCollection',
    'views/gallery/GalleryMetaDataListView'
    ], function($,_,Backbone, HomeView, GalleryModel, GalleryView, GalleryCollection, GalleryMetaDataListView){
        var AppRouter = Backbone.Router.extend({
            routes: {
                'galleries/:gallery_id' : 'showGallery',
   
                //default
                '*actions': 'home'
            }
        });

        var initialize = function(options){

            var app_router = new AppRouter();
   

            app_router.on('route:showGallery', function(gallery_id){
                
                //show gallery
                var gallery = new GalleryModel({id: gallery_id});
                gallery.fetch({
                    success: function(model){
                    },
                    error: function(){}
                });
                var galleryView = new GalleryView({model:gallery, el:'#gallery-container'});
                $('#gallery-table').html(galleryView.el);
               
            });

            app_router.on('route:home', function(actions){
    
                homeView = new HomeView({el: '#content' });
                homeView.render();
               
            });

           Backbone.history.start();

        };

       
        return {
            initialize: initialize
        };
       

    });