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
users = User.create([{name: "Christine"}, {name: "Thomas"}, {name: "Pat"}, {name: "Yolanda"}, {name: "Jack"}])

rides = Ride.create([
        {user_id: 1, date: "1/25/2015", start: "washington", end: "alexandria", distance: "20 mi", time: "7 h", title: 'Rock creek ride'},
        {user_id: 2, date: "10/13/2015", start: "washington", end: "bethesda", distance: "10 mi" , time: "2 h 20 min", title: 'Rock creek ride'},
        {user_id: 2, date: "4/02/2015", start: "baltimore", end: "falls church", distance: "30 mi", time: "3 h 30 min", title: 'Rock creek ride'},
        {user_id: 3, date: "5/23/2015", start: "washington", end: "baltimore", distance: "80 mi", time: "7 h 20 min", title: 'Rock creek ride'},
        {user_id: 3, date: "2/12/2015", start: "alexandria", end: "falls church", distance: "20 mi", time: "2 h", title: 'Rock creek ride'},
        {user_id: 4, date: "11/22/2015", start: "alexandria", end: "falls church", distance: "20 mi", time: "2 h", title: 'Rock creek ride'}
        ])
