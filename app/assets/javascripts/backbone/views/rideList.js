App.Views.RideList = Backbone.View.extend({
  el: '#tableRides',

  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderOne);
    this.listenTo(this.collection, 'reset', this.renderAll);
  },

  renderAll: function(){
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  },

  renderOne: function(ride) {
    var ride = new App.Views.Ride({ model: ride});
    var rides = this.collection.get('rides');
  }

});
