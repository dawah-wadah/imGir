# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


wadah = User.create({username: 'Wadah', password: "password"})
vlad = User.create({username: 'Vlad', password: "password"})
yaakov = User.create({username: 'Yaakov', password: "password"})


Post.create({title: 'first post', description: 'this is my first post', author_id: wadah.id})
Post.create({title: 'second post', description: 'this is my second post', author_id: wadah.id})
Post.create({title: 'third post', description: 'this is my third post', author_id: wadah.id})
Post.create({title: 'first post', description: 'this is my third post', author_id: vlad.id})
