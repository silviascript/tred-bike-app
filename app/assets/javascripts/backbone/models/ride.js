App.Models.Ride = Backbone.Model.extend({
  // urlRoot: '/users/'  + data + '/rides',

  initialize: function(){
      //  console.log('New Ride Model Created');
      //  console.log(this)

       this.url = 'users/' + id_data.responseText + '/rides';
       console.log(id_data.responseText)
       console.log(this.url)

   }
});

      var id_data = ($.get ("/users", function(data) {
         console.log(id_data)
        })
      );
