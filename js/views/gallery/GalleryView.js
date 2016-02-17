define([
    'jquery',
    'underscore',
    'backbone',
    'views/photo/PhotoListView',
    'text!templates/gallery.html',
    ], function($,_,Backbone, PhotoListView, GalleryTemplate){
        var GalleryView = Backbone.View.extend({

            template: _.template(GalleryTemplate),

            initialize: function() {
              this._views = [];
                
              this.listenTo(this.model, 'change', this.render);
              
              var photos = this.model.get('photos');
              photos.configRequest({gallery_id: this.model.get('id')});
              photos.fetch({
                    success: function(collection, response,options){
                        
                    },
                    error: function(){
                        console.log("PhotoListView failed to fetch photos");
                    }
                });

              this.listenTo(photos, 'reset', this.render);


            },

            render: function(){

                //render gallery attributes
                var galleryModel = this.model.toJSONWithDate();

               $('#gallery-container').html(this.template(galleryModel));

           
                //render gallery's photo collection 
                var photos = this.model.get('photos');



                var photosview = new PhotoListView({collection: photos, el:'#photo-row'});



                return this;
            }




        });
        return GalleryView;

    });