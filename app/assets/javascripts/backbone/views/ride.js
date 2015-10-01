App.Views.Ride = Backbone.View.extend({
  el: '#tableRides',
  tagName: 'div',

  initialize: function(){
    console.dir(this)
    console.log(this.models + " -->ride view  can't find model");
    this.template = HandlebarsTemplates['rideTable'](this.model.toJSON());
    this.listenTo(App.Models.Ride, 'change', this.render);
    this.render();
  },
  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
  },
  render: function(){
    var source = $('#rideTable').html();
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
