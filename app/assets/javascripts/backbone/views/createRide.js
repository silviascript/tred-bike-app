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
    var route1 = $(".mapbox-directions-route-details").html();

    $("#start").val(mapstart)
    $("#end").val(mapend)
    //regex determines mileage and time based on string response from mapbox
    var matches = route1.match(/(\d*\.*\d*\s*mi),\s(\d*\sh*\s*\d*\s*min*)/)
    var miles = matches[1];
    var time = matches[2];
    $("#distance").val(miles)
    $("#time").val(time)
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
    App.router.navigate('');
  },

  closeForm: function(){
    $("#new-ride-modal").fadeOut();
    App.router.navigate('');
  }
});
