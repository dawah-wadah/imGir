require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({
  username: 'Wadah',
  password: 'password'
  })
15.times do |num|
  User.create({
    username: Faker::GameOfThrones.character,
    password: 'password'
  })
end
  60.times do
  post = Post.create({
    title: Faker::Friends.quote,
    description: Faker::Friends.quote,
    author_id: User.all.sample.id
    })
    2.times do
      Image.create({
        imageable_id: post.id,
        imageable_type: 'Post',
        image: Faker::LoremPixel.image,
        main_image: true,
        description: Faker::Friends.quote
    })
      6.times do
      comment = Comment.create({
          user_id: User.all.sample.id,
          parent_id: post.id,
          parent_type: 'Post',
          post_id: post.id,
          body: Faker::Friends.quote
        })
        rand(5).times do
        Comment.create({
          user_id: User.all.sample.id,
          parent_id: comment.id,
          parent_type: 'Comment',
          post_id: post.id,
          body: Faker::Friends.quote
          })
        end
      end
    end
end
