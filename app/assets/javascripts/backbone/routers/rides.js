App.Router = Backbone.Router.extend({

  initialize: function(){
    App.Collections.rides = new App.Collections.Rides();

    App.Views.createRide = new App.Views.CreateRide({collection: App.Collections.rides});
    App.Views.listView = new App.Views.ListView({collection: App.Collections.rides});
    App.Views.rideView = new App.Views.RideView({collection: App.Collections.rides});

    App.Collections.rides.fetch({reset:true});
  },

})
