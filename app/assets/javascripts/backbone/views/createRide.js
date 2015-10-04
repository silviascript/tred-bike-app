App.Views.CreateRide = Backbone.View.extend({
  el: '#map-ride-add',

  events: {
    'click #save' : 'render',
    'click .submit': 'create',
    'click .close': 'closeForm'
  },

  render: function(){
    console.log("new ride modal is clicked")
    $("#new-ride-modal").fadeIn();
    var mapstart = $("#mapbox-directions-origin-input").val()
    var mapend = $("#mapbox-directions-destination-input").val()

    $("#start").val(mapstart)
    $("#end").val(mapend)


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
    this.$el.find("input, textarea").val("");
    this.closeForm();
    //clear the form
  },

  closeForm: function(){
    $("#new-ride-modal").fadeOut();
    App.router.navigate('');
  }
});
