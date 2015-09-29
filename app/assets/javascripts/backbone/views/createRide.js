App.Views.CreateRide = Backbone.View.extend({
  el: '#rideForm',
  tagName: 'li',

  events: {
    'click .submit': 'create',
    'click .close': 'closeForm'
  },

  create: function(event) {
    var formData = {
      start:    $("#start").val(),
      end:      $("#end").val(),
      distance: $("#distance").val(),
      time:     $("#time").val(),
      title:    $("#title").val(),
    };
    this.collection.create(formData);
    //clear the form
    $('input').val();
    console.log("new instance model created")
  }
});


  // render: function(){
  //   event.preventDefault();
  //   __.each(this.model.attribtues, function(val, key){
  //     var row = "<tr><td>" + val + "</td></tr>";
  //     $("#thetable").append(row);
  //   });
  //   return this;
  //     console.log("render works")
  //   }


    // refresh list of rides (#rides tbody)

    // reset $el
    // loop thru this.collection

    // loop {
    //   var newRide = new App.Views.Ride({model: ride});
    //
    //   this.$el.append(newRide.render().$el);
    //
    //     render a new ride, append it to the riderow, with each of its key:value pairs set
    //     as td elements.
    //
    // }
