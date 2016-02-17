define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/photo.html'
    ], function($,_,Backbone, PhotoTemplate){
        var PhotoView = Backbone.View.extend({
  
            template: _.template(PhotoTemplate),
      
        
            render: function(){

                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }

        });
        return PhotoView;
    });