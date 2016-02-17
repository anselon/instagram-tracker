define([
    'jquery',
    'underscore',
    'backbone',
    'collections/galleries/GalleryCollection',
    'views/gallery/GalleryMetaDataListView'

    ], function($,_,Backbone, GalleryCollection, GalleryMetaDataListView){
        var HomeView = Backbone.View.extend({

            initialize: function(){

            $('tbody').empty();
            $('#photo-row').empty();


            //List existing galleries
            var galleries = new GalleryCollection();
            galleryMetaDataListView = new GalleryMetaDataListView({ collection: galleries, el: '#gallery-container' });

               
            },

            render: function(){


                return this;
                
            }




        });

        return HomeView;
    });