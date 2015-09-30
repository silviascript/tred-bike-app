App.Collections.Rides = Backbone.Collection.extend({
  model: App.Models.Ride,
  url: "/rides",

  initialize: function(){
    console.log("New Rides Collection")
  }
});
