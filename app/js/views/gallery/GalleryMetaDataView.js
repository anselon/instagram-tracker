define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/gallery.html'
    ], function($,_,Backbone, GalleryMetaDataTemplate){
        var GalleryMetaDataView = Backbone.View.extend({
            tagName: 'tr',
            className: 'gallery-listing',
            template: _.template(GalleryMetaDataTemplate),
            render: function(){

                this.$el.html(this.template(this.model.toJSONWithDate()));
                return this;
            },
            close: function() {
           
                this.remove();
            }

        });
        return GalleryMetaDataView;
    });