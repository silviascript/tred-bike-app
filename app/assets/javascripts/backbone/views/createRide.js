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
    console.log(route1)
    var res = route1.split(" ");
    var commaDistance = res.splice(0,2).join(" ");
    var distance = commaDistance.slice(1, -1)
    console.log(distance)
    var time = res.splice(0, 6).join(" ")
    console.log(time)
    $("#distance").val(distance)
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
