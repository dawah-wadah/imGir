require 'faker'

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


5.times do |num|
  a = User.create({
    username: Faker::Name.name,
    password: 'password'
    })

  b = Post.create({
    title: Faker::Lorem.sentence(1),
    description: Faker::Lorem.paragraph,
    author_id: a.id,
    upvotes: Faker::Number.between(0,58),
    downvotes: Faker::Number.between(0, 58)
    })

    #  post_id            :integer          not null
    #  title              :string           not null
    #  main_image         :boolean          default(TRUE), not null
    #  description        :text

  c = Image.create({
    post_id: b.id,
    title: b.title,
    main_image: true,
    description: Faker::Lorem.sentence(1)
    })
end
