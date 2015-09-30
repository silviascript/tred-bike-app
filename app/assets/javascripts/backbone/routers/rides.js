App.Routers.Ride = Backbone.Router.extend({
  routes: {
    '':               'index',
    'rides/new':      'newRide',
    'rides/:id/edit': 'editRide'
  },
  initialize: function(){
    App.Collections.rides = new App.Collections.Rides();

    App.Views.createRide =  new App.Views.CreateRide({collection: App.Collections.rides});
    App.Views.rideList =    new App.Views.RideList({collection: App.Collections.rides});
    App.Views.ride =        new App.Views.Ride({collection: App.Collections.rides});

    App.Collections.rides.fetch({reset:true});
  },

  index: function(){
    // $('#tableRides').fadeIn();
    App.Collections.rides.fetch()
  },
  newRide: function(){
    // $('#rideForm').fadeIn();
    App.Collections.rides.fetch()
  },
  editRide: function(){
    App.Collections.rides.fetch().then(function(){
      view = App.Views.listView.find(id);
      // make this live once you create edit form or functionality
      // view.renderEditForm();
    })
  }

})
