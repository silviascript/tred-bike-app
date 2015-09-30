App.Views.Ride = Backbone.View.extend({
  el: '#tableRides',

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.render();
  },
  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
  },
  render: function(){
    // var source = $('#rideTable').html();
    // var template = Handlebars.compile(source);
    // var html = template(this.model.toJSON());
    // this.$el.html(html);
  },
  edit: function(){
    console.log("executed when a ride is double clicked")
  },
  updateOnEnter: function(){
    console.log("executed on each keypress when in ride edit mode, action will come later")
  }
});
