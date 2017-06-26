require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


30.times do |num|
  a = User.create({
    username: Faker::GameOfThrones.character,
    password: 'password'
    })

  b = Post.create({
    title: Faker::ChuckNorris.fact,
    description: Faker::Lorem.paragraph,
    author_id: a.id,
    upvotes: Faker::Number.between(0,1000),
    downvotes: Faker::Number.between(0, 1000)
    })

    Image.create({
    imageable_id: b.id,
    imageable_type: 'Post',
    title: b.title,
    image: Faker::LoremPixel.image,
    main_image: true,
    description: Faker::ChuckNorris.fact
    })
    Image.create({
    imageable_id: b.id,
    imageable_type: 'Post',
    title: b.title,
    image: Faker::LoremPixel.image,
    main_image: false,
    description: Faker::ChuckNorris.fact
    })
end
