App.Routers.Ride = Backbone.Router.extend({
  routes: {
    '/users/:user_id/rides': 'index',
    '/users/:user_id/rides/new': 'newRide',
    '/users/:user_id/rides/:id/edit': 'editRide'
  },
  initialize: function(){
    App.Collections.rides = new App.Collections.Rides();
    App.Views.rideList = new App.Views.RideList({collection: App.Collections.rides});
    App.Views.createRide =  new App.Views.CreateRide({collection: App.Collections.rides});
    // add mapbox
    L.mapbox.accessToken = 'pk.eyJ1IjoiY2xvdmV0dCIsImEiOiJjaWVtejlzbzcwM3VhczJtMm04d214N3lpIn0.-sC2G_jfDWbhZFY-LraCTw';
    var map = L.mapbox.map('map', 'clovett.ciemz9sg603sbssm2g0v6fm03', {
      zoomControl: false
      }).setView([38.90, -77.03], 13);
    var markerLayer = L.mapbox.featureLayer().addTo(map);
      // geolocation tool --> L.control.locate().addTo(map);

      // move the attribution control out of the way
      map.attributionControl.setPosition('bottomleft');
      // create the initial directions object, from which the layer
      // and inputs will pull data.
      var directions = L.mapbox.directions();

      var directionsLayer = L.mapbox.directions.layer(directions)
          .addTo(map);

      var directionsInputControl = L.mapbox.directions.inputControl('inputs', directions)
          .addTo(map);

      var directionsErrorsControl = L.mapbox.directions.errorsControl('errors', directions)
          .addTo(map);

      var directionsRoutesControl = L.mapbox.directions.routesControl('routes', directions)
          .addTo(map);

      var directionsInstructionsControl = L.mapbox.directions.instructionsControl('instructions', directions)
          .addTo(map);

  },

  index: function(){
    $("#new-ride-modal").hide();
    App.Collections.rides.fetch()
  },
  newRide: function(){
    $("#new-ride-modal").fadeIn();
  },
  editRide: function(id){
    App.Collections.rides.fetch().then(function(){
      view = App.Views.rideList.find(id);
    })
  }
})
