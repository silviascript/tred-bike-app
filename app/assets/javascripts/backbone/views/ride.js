App.Views.Ride = Backbone.View.extend({
  el: '#ridetable',
  // className: 'rideform',

  events: {
    'click .submit': 'createRide'
  },

  intialize: function() {
    this.render();
    this.listenTo(this.model, 'change', this.render);
    console.log("initialized")
  },

  createRide: function() {
    event.preventDefault();
    var data = {
      start: this.$("#start").val(),
      end: this.$("#end").val(),
      distance: this.$("#distance").val(),
      time: this.$("#time").val(),
      title: this.$("#title").val(),
    }
    this.model.rides.create(data);

  },

  render: function(){
    this.$el.html("hello world")
    event.preventDefault();
    var newRide = new App.Views.Ride({model: ride});
    this.$el.find(".tbody").append(newRide.$el);
      console.log("render works")
  }

})
