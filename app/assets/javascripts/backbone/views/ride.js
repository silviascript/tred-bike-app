App.Views.Ride = Backbone.View.extend({
  // el: '#table',
  // tagName: 'td',

  events: {
    // 'click .edit': 'renderEditForm',
    // 'click .submit': 'updateGrumble',
    // 'click .delete': 'deleteGrumble',
  },

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'add', this.render);
    this.template = HandlebarsTemplates['rideTable'];
    this.render();
  },

  render: function(){
    var renderedHTML = this.template(this.model.toJSON());
    this.$el.html(renderedHTML);
  },
  edit: function(){
    console.log("executed when a ride is double clicked")
  },
  updateOnEnter: function(){
    console.log("executed on each keypress when in ride edit mode, action will come later")
  }
});
