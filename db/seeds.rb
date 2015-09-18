# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
# rocksolid = User.create(email: 'rocksolid@gmail.com');
# rocksolid.rides.create(title: 'Rock creek ride');

#
users = User.create([{first_name: "Christine", last_name: "Lovett", email: 'rocksolid@gmail.com'}, {first_name: "Thomas", last_name: "Lovett", email: 'flex200@aol.com'}, {first_name: "Pat", last_name: "Lovett", email: 'feeltheburn@gmail.com'}])

rides = Ride.create([
        {start: "washington", end: "alexandria", distance: 20, time: 70, title: 'Rock creek ride', user_id: users[0].id, notes: "It was awesome"},
        {start: "washington", end: "bethesda", distance: 20, time: 70, title: 'Rock creek ride', user_id: users[1].id, notes: "Best Ride Ever"},
        {start: "baltimore", end: "falls church", distance: 20, time: 70, title: 'Rock creek ride', user_id: users[1].id,notes: "My legs hurt"},
        {start: "washington", end: "baltimore", distance: 80, time: 70, title: 'Rock creek ride', user_id: users[0].id, notes: "Saw an eagle!"},
        {start: "alexandria", end: "falls church", distance: 20, time: 70, title: 'Rock creek ride', user_id: users[2].id, notes: "I can't walk"}])
