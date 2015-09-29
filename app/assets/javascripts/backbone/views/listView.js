App.Views.ListView = Backbone.View.extend({
  el: '#theTable',

  initialize: function(){
    console.log("table loaded")
    this.listenTo(this.model, 'change', this.render);
    // this.template = HandlebarsTemplates['rideTable']
    this.render();
  },


  renderAll: function() {
   this.$el.empty();
   this.collection.each(this.renderOne, this);
 },

  renderOne: function(ride) {
    var rideView = new App.Views.Ride({model: ride});
    this.$el.append(rideView.$el);
  }
  // render: function() {
  //   var renderedHTML = this.model.toJSON();
  //   this.$el.html(renderedHTML)
  //     var rides = this.model.get('rides');
  //     _.each(rides, function(ride){
  //       var row = "<tr><td>" + val + "</td></tr>";
  //       $el.append(row);
  //     });
  //     return this;
  //       console.log("render works")
  // }

});
    // var renderedHTML = this.template(this.model.toJSON());
    // _.each(rides, function(ride){
    // this.model.attributes, function(val, key)
    //   var rideView = new RideView({ model: ride });
    //   this.$el.append(rideView.render().el);
    // }, this);


    // this.$el.html(this.template(this.model.attributes));
    // return this;
