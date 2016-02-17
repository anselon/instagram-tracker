define([
    'jquery',
    'underscore',
    'backbone',
    'views/photo/PhotoView',
    'text!templates/photo.html',
    'text!templates/pagination.html',



    ], function($,_,Backbone, PhotoView,  PhotoGridTemplate, PaginationTemplate){
        var PhotoListView = Backbone.View.extend({
            tagName: 'ul',

            template:_.template(PaginationTemplate),

            initialize: function(){
       

                var view = this;

                this.collection.fetch({

                    success: function(collection, response,options){
                        view.render();
                       
                    },
                    error: function(){
                        console.log("PhotoListView failed to fetch photos");
                    }
                });

            },

            events: {
                'click button.next' : 'nextPage',
                'click button.prev' : 'prevPage'
            },
    
            nextPage: function(){
               var view = this;
               this.collection.getNextPage().done(function(){
                 view.render();

               });
            },

            prevPage: function(){
               var view = this;
               this.collection.getPreviousPage().done(function(){
                 view.render();

               });
            },


            render: function(){
                this.$el.empty();
                this.$el.append(this.template);
                this.setElement(this.$el);
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