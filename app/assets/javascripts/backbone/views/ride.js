App.Views.Ride = Backbone.View.extend({
  tagName: 'li',

  template: _.template("<%= title %>"),
  initialize: function() {
    return this.model = new App.Models.Ride({
      title: 'C&O Canal Trip'
    });
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
})
