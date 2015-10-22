App.Models.Ride = Backbone.Model.extend({
  // urlRoot: '/users/' + user_id + '/rides',

  initialize: function(){
       console.log('New Ride Model Created');
       console.log(this)
       this.url = 'user/' + this.id + '/rides';
   },
});
