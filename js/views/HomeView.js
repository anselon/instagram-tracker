define([
    'jquery',
    'underscore',
    'backbone',
    'collections/photos/PhotoCollection',
    'views/photo/PhotoListView',
    'text!templates/home.html',
    ], function($,_,Backbone, PhotoCollection, PhotoListView, HomeTemplate){
        var HomeView = Backbone.View.extend({
            el: '#content',


            initialize: function(){
             
                var photos = new PhotoCollection();

                var photosview = new PhotoListView({collection: photos, page:2});
                $('#content').html(photosview.render().el);
     


            },

            render: function(){

              //  this.$el.html(_.template(HomeTemplate));
                return this;
                
            }




        });

        return HomeView;
    });