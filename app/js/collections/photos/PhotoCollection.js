define([
    'jquery',
    'underscore',
    'backbone',
    'models/photo/PhotoModel',
    'backbonepaginator'

    ], function($,_,Backbone, PhotoModel, BackbonePaginator){

        var PhotoCollection = Backbone.PageableCollection.extend({

            model: PhotoModel,
            gallery_id: 1,
            state: {

                firstPage: 1,
                currentPage: 1,
                totalRecords: 10000
              },
  
   
            url: function(){

                return 'https://intense-plains-15719.herokuapp.com/photo_collections/' + this.gallery_id + '/photos';
            },
                configRequest:function(options) {
                    this.gallery_id = options.gallery_id;
                    this.page = options.page;

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

            parse: function(response){

                return response;

            }

        });

        return PhotoCollection;
    });