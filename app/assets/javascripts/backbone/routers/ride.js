App.Routers.Ride = Backbone.Router.extend({
  routes: {
    '': 'index',
    'rides/new': 'newRide',
    'rides/:id/edit': 'editRide'
  },
  initialize: function(){
    App.Collections.rides = new App.Collections.Rides();
    App.Views.rideList = new App.Views.RideList({collection: App.Collections.rides});
    App.Views.createRide =  new App.Views.CreateRide({collection: App.Collections.rides});
  },
  index: function(){
    App.Collections.rides.fetch()
  },
  newRide: function(){
    // $('#rideForm').fadeIn();
    App.Collections.rides.fetch();
  },
  editRide: function(){
    App.Collections.rides.fetch().then(function(){
      view = App.Views.rideList.find(id);
    })
  }
})
