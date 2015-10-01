App.Views.CreateRide = Backbone.View.extend({
  el: '#rideForm',
  tagName: 'li',

  events: {
    'click .submit': 'create',
  },
  initialize: function(){
    // console.log(this.model + " -->createRide view  can't find model");
  },

  create: function(event) {
    event.preventDefault();
    var formData = {
      start:    $("#start").val(),
      end:      $("#end").val(),
      distance: $("#distance").val(),
      time:     $("#time").val(),
      title:    $("#title").val(),
    };
    this.collection.create(formData);
    //clear the form
    this.$el.find("input, textarea").val("");
    // console.log("new instance model created")
  }
});
