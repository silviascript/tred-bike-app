App.Collections.Rides = Backbone.Collection.extend({
  model: App.Models.Ride,
  url: "/users/1/rides",

  initialize: function(){
    console.log("New Hot Rides Collection")
  }
})
