App.Views.CreateRide = Backbone.View.extend({
  el: '#ride',
  class_name: 'Ride',

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    console.log("initialized")
  },

  events: {
    'click .submit': 'create'
  },

  create: function(event) {
    event.preventDefault();
    var data = {
      start: this.$("#start").val(),
      end: this.$("#end").val(),
      distance: this.$("#distance").val(),
      time: this.$("#time").val(),
      title: this.$("#title").val(),
    }
    this.collection.create(data);
    console.log("new model created")
  },

  render: function(){
    event.preventDefault();
    // refresh list of rides (#rides tbody)
    // loop thru this.collection
      var newRide = new App.Views.Ride({model: ride});

      this.$el.append(newRide.render().$el);
      console.log("render works")
  }

})
