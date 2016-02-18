define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/gallery_new.html',
    ], function($,_,Backbone,  GalleryNewTemplate){
        var GalleryNewView = Backbone.View.extend({

            template: _.template(GalleryNewTemplate),

            events: {
              'submit' : 'createGallery'
            },

            initialize: function() {

              //this.listenTo(this.model, 'change', this.createGallery);
              //_.bindAll(this, "createGallery");
            },
            getModelData: function(el) {
                            //get dates 
              var inputArray = $(el).serializeArray();
            
              var len = inputArray.length;
              var inputObj = {};

              for (i=0; i<len; i++) {
                inputObj[inputArray[i].name] = inputArray[i].value;
              }

              var start_date = new Date(inputObj['start_day'] + "T" + inputObj['start_time'] + ":00");
              var end_date = new Date(inputObj['end_day'] + "T" + inputObj['end_time'] + ":00");
              var tag = inputObj['tag'];

              modelData = {
                tag: tag,
                start_date: start_date,
                end_date: end_date
              };
              console.log(modelData);

              return modelData;


      
            },

            createGallery: function(event){
              event.preventDefault();
   
              console.log('creating gallery');
              var collectionData = this.getModelData(event.target);
  
              var data = {photo_collection: collectionData};
              this.model.set('tag', collectionData['tag'] );
              this.model.set('start_date', collectionData['start_date']);
              this.model.set('end_date', collectionData['end_date']);
              
              this.model.create(data).done(this.render);
              console.log("data:",data);
        
            },

            render: function(){

              
              this.$el.html(this.template);
              this.el = '.form';



                return this;
            }




        });
        return GalleryNewView;

    });