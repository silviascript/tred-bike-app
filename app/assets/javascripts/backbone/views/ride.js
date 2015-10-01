App.Views.Ride = Backbone.View.extend({
  el: '#tableRides',
  tagName: 'div',

  initialize: function(){
    this.template = HandlebarsTemplates['rideTable'](this.model.toJSON());
    this.listenTo(App.Models.Ride, 'change', this.render);
    this.render();
  },
  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
  },
  render: function(){
    this.$el.html(this.template);
  },
  edit: function(){
    console.log("executed when a ride is double clicked")
  },
  updateOnEnter: function(){
    console.log("executed on each keypress when in ride edit mode, action will come later")
  }
});
