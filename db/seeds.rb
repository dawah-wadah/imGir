require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

12.times do |num|
  User.create({
  username: Faker::GameOfThrones.character,
  password: 'password'
  })
end
  60.times do |num2|
  b = Post.create({
    title: Faker::ChuckNorris.fact,
    description: Faker::ChuckNorris.fact,
    author_id: User.all.sample.id,
    upvotes: Faker::Number.between(0,1000),
    downvotes: Faker::Number.between(0, 1000)
    })
    Image.create({
      imageable_id: b.id,
      imageable_type: 'Post',
      image: Faker::LoremPixel.image,
      main_image: true,
      description: Faker::ChuckNorris.fact
      })
  1.times do |num3|
    Image.create({
      imageable_id: b.id,
      imageable_type: 'Post',
      image: Faker::LoremPixel.image,
      main_image: false,
      description: Faker::ChuckNorris.fact
      })
    end
    5.times do
      post = Post.all.sample
        Comment.create({
        user_id: User.all.sample.id,
        parent_id: post,
        parent_type: 'Post',
        post_id: post.id,
        body: Faker::ChuckNorris.fact
        })
    end

  end
