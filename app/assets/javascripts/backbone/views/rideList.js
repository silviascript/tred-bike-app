App.Views.RideList = Backbone.View.extend({
  el: '#tableRides',
  views: [],

  initialize: function(){
    this.listenTo(this.collection, 'add', this.renderOne);
    this.listenTo(this.collection, 'reset', this.renderAll);
  },

  renderAll: function(){
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  },

  renderOne: function(ride) {
    var view = new App.Views.Ride({ model: ride});
    this.views.push(view);
    this.$el.prepend(view.$el);
  },

  find: function(id){
    console.log(this.views)
    for(var i = 0; i < this.views.length; i++){
    if(this.views[i].model.get("id") == id){
      view = this.views[i]
    }
  }
  return view
}
});
