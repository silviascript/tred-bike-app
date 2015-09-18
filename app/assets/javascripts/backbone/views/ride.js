App.Views.Ride = Backbone.View.extend({
  class_name: "thetable",
  tagName: 'table',

  initialize: function(){
    this.render()
  },

  render: function(){
    event.preventDefault();
    __.each(this.model.attributes, function(val, key){
      var row = "<tr><td>" + val + "</td></tr>";
      $("#thetable").append(row);
    });
    return this;
      console.log("render works")
  }
});
