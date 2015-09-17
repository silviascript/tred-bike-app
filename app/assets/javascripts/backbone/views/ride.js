App.Views.Ride = Backbone.View.extend({
  className: 'rideform',
  tagName: 'tbody',

  events: {
    'click .id': 'createRide'
  },

  // initialize: function() {
  //   this.listenTo(this.model, 'change', this.render);
  //   this.template = HandlebarsTemplates['ride'];
  //   this.render();
  // },
  createRide: function() {
    var data = {
      start: this.$("#start").val(),
      end: this.$("#end").val(),
      distance: this.$("#distance").val(),
      time: this.$("#time").val(),
      title: this.$("#title").val(),
    }
    this.model.rides.create(data)
    console.log("create data works")
  },

  render: function(){
    var renderedHTML = this.template(this.model.toJSON());

  }

})
