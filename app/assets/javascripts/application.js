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
//= require handlebars
//= require_self

//= require_tree ./templates
//= require backbone_rails_sync
//= require backbone_datalink
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require backbone/tred
//= require_tree .

// what do I need to get the templates to work?
// HandlebarsTemplates['newRide'] --> this naming it in the global space?

App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Templates: {}
};

$(document).ready(function() {

  App.Routers.ride = new App.Routers.Ride();
  Backbone.history.start();
});
