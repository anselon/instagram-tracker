define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/photo.html',
    'text!templates/video.html'
    ], function($,_,Backbone, PhotoTemplate,VideoTemplate){
        var PhotoView = Backbone.View.extend({
  
            template: _.template(PhotoTemplate),
      
         
            render: function(){
                //check if video 
                if (this.model.get('src_link').split('?')[0].slice(-3) == "jpg"){
                    this.$el.html(this.template(this.model.toJSON()));
                }else {
                    this.$el.html(_.template(VideoTemplate,this.model.toJSON()));
                }
                return this;
            }

        });
        return PhotoView;
    });