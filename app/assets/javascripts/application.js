// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars.runtime
//= require_tree ./templates
//= require_self
//= require backbone_rails_sync
//= require backbone_datalink
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require backbone_datalink
//= require backbone/tred
//= require_tree .

// what do I need to get the templates to work?
// HandlebarsTemplates['newRide'] --> this naming it in the global space?

App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {}
};

$(document).ready(function() {
  L.mapbox.accessToken = 'pk.eyJ1IjoiY2xvdmV0dCIsImEiOiJjaWVtejlzbzcwM3VhczJtMm04d214N3lpIn0.-sC2G_jfDWbhZFY-LraCTw';
  var map = L.mapbox.map('map', 'clovett.ciemz9sg603sbssm2g0v6fm03').setView([40, -74.50], 9);
  var markerLayer = L.mapbox.featureLayer().addTo(map);
  // rides.reset(<%= @rides.to_json %>)
  // rides.fetch().then(function(){
  //   var view = new App.Views.CreateRide({collection: rides})
  // });

  var rides = new App.Collections.Rides();

  App.router = new App.Router();
  Backbone.history.start();
});
