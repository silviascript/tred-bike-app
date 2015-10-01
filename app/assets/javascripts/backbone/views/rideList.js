App.Views.RideList = Backbone.View.extend({
  el: '#tableRides',

  initialize: function(){
    // console.log(this.model + " -->rideList view  can't find model");
    this.listenTo(this.collection, 'add', this.renderOne);
    this.listenTo(this.collection, 'reset', this.renderAll);
  },

  renderAll: function(){
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  },

  renderOne: function(ride) {
    var rideView = new App.Views.Ride({ model: ride});
    var rides = this.collection.get('rides');
  }
  //go to rails and verify that the model is correct in rails and everthing is aligned correctly
  //use find view to find the correct model with a loop
  //the problem is its not finding the model, thats why toJSON isn't working
});
