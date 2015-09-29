App.Views.RideView = Backbone.View.extend({
  el: '#rideRow',
  //chache the template function for a single item

  initialize: function(){
  //Below we use _.bind to re-render our view when a model changes.
    this.listenTo(this.model, 'change', this.render);
    this.template = HandlebarsTemplates['rideTable'];
    this.render();
  },

  events: {
    'dblclick label': 'edit',
    'keypress .edit': 'updateOnEnter',
    'blur .edit': 'close'
  },

  //called when the first view is created

  //re-render the titles of the rides
  render: function(){
    this.$el.html(this.template);
    // $el here is a reference to the jQuery element
    // associated with the view, todoTpl is a reference
    // to an Underscore template and model.attributes
    // contains the attributes of the model.
    // Altogether, the statement is replacing the HTML of
    // a DOM element with the result of instantiating a
    // template with the model's attributes.
    // this.input = this.$('.edit');
    return this;
  },

  edit: function(){
    console.log("executed when a ride is double clicked")
  },

  updateOnEnter: function(){
    console.log("executed on each keypress when in ride edit mode, action will come later")
  }
});



// App.Views.Ride = Backbone.View.extend({
//   id: "theTable",
//   // tagName: 'table',
//
//   initialize: function(){
//     this.listenTo(this.model, 'change', this.render);
//     console.log("this ride view apparently works")
//   },
//
//   render: function(){
//     event.preventDefault();
//     __.each(this.model.attributes, function(val, key){
//       var row = "<tr><td>" + val + "</td></tr>";
//       $("#theTable").append(row);
//     });
//     return this;
//       console.log("render works")
//   }
// });
