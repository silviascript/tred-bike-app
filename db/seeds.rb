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
users = User.create([{name: "Christine"}, {name: "Thomas"}, {name: "Pat"}])

rides = Ride.create([
        {start: "washington", end: "alexandria", distance: 20, time: 70, title: 'Rock creek ride'},
        {start: "washington", end: "bethesda", distance: 20, time: 70, title: 'Rock creek ride'},
        {start: "baltimore", end: "falls church", distance: 20, time: 70, title: 'Rock creek ride'},
        {start: "washington", end: "baltimore", distance: 80, time: 70, title: 'Rock creek ride'},
        {start: "alexandria", end: "falls church", distance: 20, time: 70, title: 'Rock creek ride'}])
