App.Views.ListView = Backbone.View.extend({
  el: '#theTable',

  initialize: function(){
    console.log("table loaded")
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);
  },

  renderAll: function() {
    console.log("rendering all")
    // this.$el.empty();
    this.collection.each(this.renderOne, this);
 },

  renderOne: function(ride) {
    var rideView = new App.Views.RideView({model: ride});
    this.$el.append(rideView.$el);
  }

    // console.log("rendering one")
    // var rides = this.collection.get('rides');
    // _.each(rides, function(ride){
    //   var row = "<tr><td>" + val + "</td></tr>";
    //   this.$el.append(row);
    // })
  });


    // Do i need to use an _each loop to iterate over each key value pair in the Model
    // and convert it to Json, how to I then tie it to the correct key?

  // render: function() {
  //   var renderedHTML = this.model.toJSON();
  //   this.$el.html(renderedHTML)
  //     var rides = this.model.get('rides');
  //     _.each(rides, function(ride){
  //       var row = "<tr><td>" + val + "</td></tr>";
  //       $el.append(row);
  //     });
  //     return this;

  // }
