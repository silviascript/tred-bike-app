App.Models.Ride = Backbone.Model.extend({
  initialize: function(){
       console.log('New Ride Model Created');
   },
  urlRoot: '/rides',
})
//
// var myRide = new App.Models.Ride();
// console.log(JSON.stringify(myRide))
