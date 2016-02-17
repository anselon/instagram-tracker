define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/gallery_new.html',
    ], function($,_,Backbone,  GalleryNewTemplate){
        var GalleryNewView = Backbone.View.extend({

            template: _.template(GalleryNewTemplate),

            events: {
              'click button.submit' : createGallery
            },

            initialize: function() {

              this.listenTo(this.model, 'change', this.render);

            },

            createGallery: function(hashtag, start_date, end_date){
              
              photos.configRequest({gallery_id: this.model.get('id')});
              photos.fetch({
                    type: 'POST',
                    data: {
                      photo_collection: {
                        start_date: this.start_date,
                        end_date: this.end_date,
                        tag: this.tag
                      }


                    },
                    success: function(collection, response,options){
                        console.log(response);
                    },
                    error: function(){
                        console.log("PhotoListView failed to fetch photos");
                    }
                });
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