App.Views.Ride = Backbone.View.extend({
  // el: '#table',
  // tagName: 'td',

  events: {
    'dblclick .edit': 'edit',
    'click .submit': 'update',
    "blur .edit"      : "close"
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
    this.input = this.$('.edit');
    return this;
  },

  edit: function(){
    console.log("double clik works")
    this.editTemplate = HandlebarsTemplates['editForm'];
    App.Routers.ride.navigate('rides/' + this.model.id + '/edit')
    this.$el.html(this.editTemplate(this.model.toJSON()))
  },

  update: function() {
    event.preventDefault();
    var data = {
      start: this.$("[name='start']").val(),
      end: this.$("[name='end']").val(),
      distance: this.$("[name='distance']").val(),
      time: this.$("[name='time']").val(),
      title: this.$("[name='title']").val()
    }
    this.model.save(data);
  },

});
