App.Views.Ride = Backbone.View.extend({
  el: '#ridetable',
  className: 'rideform',


  intialize: function() {
    // this.render();
    this.listenTo(this.model, 'change', this.render);
    console.log("initialized")
  },

  events: {
    'click .submit': 'createRide'
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
    event.preventDefault();
    var newRide = new App.Views.Ride({model: ride});
    ('#ridetable').append(newRide.render().$el);
      console.log("render works")
  }

})
