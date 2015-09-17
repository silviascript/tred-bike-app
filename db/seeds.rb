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
users = User.create([{email: 'rocksolid@gmail.com'}, {email: 'flex200@aol.com'}, {email: 'feeltheburn@gmail.com'}])

Ride.create({title: "test", user_id: users[0].id})
rides = Ride.create([{title: 'Rock creek ride', user_id: users[0].id}, {title: "Capital Crescent Trail", user_id: users[1].id}, {title: "Mount Vernon Trail", user_id: users[2].id}])
