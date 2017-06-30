require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: 'Wadah', password: 'password')
User.create(username: 'Yaakov', password: 'password')
User.create(username: 'Musgrave', password: 'SpursSpurs123')
User.create(username: 'Chris_Hakos', password: 'password')
User.create(username: 'CalvinLEE', password: 'password')
User.create(username: 'WP_Johnson', password: 'password')
User.create(username: 'BAIKEN', password: 'password')
User.create(username: 'Jesus Christ', password: 'password')
User.create(username: 'MikeBoan', password: 'password')
User.create(username: 'Oscar', password: 'password')
User.create(username: 'WenBoooooook', password: 'password')
User.create(username: 'Mos_Steph', password: 'password')
User.create(username: 'McBennett', password: 'password')
User.create(username: 'Nick_da_Greek', password: 'password')
User.create(username: 'PapaMikeNoel', password: 'password')
User.create(username: 'TheRealSeanSnyder', password: 'password')
User.create(username: 'TheFakeSeanChowdhury', password: 'password')
User.create(username: 'JohnBaek', password: 'password')
User.create(username: 'Martinian', password: 'password')
User.create(username: 'Kingsley_Shacklebolt', password: 'password')
User.create(username: '3r1cVooo', password: 'password')
User.create(username: 'AmmarWonderWall', password: 'password')
User.create(username: 'Nathaniel_Thorn', password: 'password')
User.create(username: 'NathanNathan', password: 'password')
User.create(username: 'Nathan', password: 'password')
User.create(username: 'Tommy_Pickles', password: 'password')

9.times do
  User.create(username: Faker::GameOfThrones.character, password: 'password')
end


  post = Post.create(title: "I'M GIR TIME EVERYBODY",
   description: 'All Right, Everybody, its 3-ish o\'clock, time for Wadah\'s Presentation',
    author_id: User.find_by(username: 'Wadah'))
  rand(6).times do
    Image.create(imageable_id: post.id,
                 imageable_type: 'Post',
                 image: Faker::LoremPixel.image,
                 main_image: true,
                 description: Faker::Friends.quote)
    rand(8).times do
      comment = Comment.create(user_id: User.all.sample.id,
                               parent_id: post.id,
                               parent_type: 'Post',
                               post_id: post.id,
                               body: 'Wadah your presentation is awesome')
      Comment.create(user_id: User.all.sample.id, parent_id: post.id, parent_type: 'Post', post_id: post.id, body: 'Dude, this site is killer AF')
      Comment.create(user_id: User.all.sample.id, parent_id: post.id, parent_type: 'Post', post_id: post.id, body: 'Right, on keep it up')
      Comment.create(user_id: User.find_by(username: 'MikeBoan'), parent_id: post.id, parent_type: 'Post', post_id: post.id, body: 'I\'ve seen better')
      Comment.create(user_id: User.all.sample.id, parent_id: post.id, parent_type: 'Post', post_id: post.id, body: 'Wadah, you\'re the man')
      o = Comment.create(user_id: User.find_by(username: 'Oscar'), parent_id: post.id, parent_type: 'Post', post_id: post.id, body: 'I wish you were in my circle')
      Comment.create(user_id: User.find_by(username: 'MikeBoan'), parent_id: o.id, parent_type: 'Comment', post_id: post.id, body: 'Too bad')
      User.all.each do |user|
        Vote.create(voter_id: user.id, voteable_type: 'Post', voteable_id: post.id, vote_type: ['Upvote', 'Downvote'].sample)
      end




      rand(300).times do
        new_post = Post.create(title: Faker::Friends.quote,
         description: Faker::Friends.quote,
          author_id: User.all.sample.id)

          Image.create(imageable_id: new_post.id,
          imageable_type: 'Post',
          image: Faker::LoremPixel.image,
          main_image: true,
          description: Faker::Friends.quote)
          rand(3).times do
            Image.create(imageable_id: new_post.id,
                         imageable_type: 'Post',
                         image: Faker::LoremPixel.image,
                         main_image: false,
                         description: Faker::Friends.quote)
                      end

        rand(7).times do
          Comment.create(user_id: User.all.sample.id, parent_id: comment.id, parent_type: 'Post', post_id: new_post.id, body: Faker::Friends.quote)
        end
        User.all.each do |user|
          Vote.create(voter_id: user.id, voteable_type: 'Post', voteable_id: new_post.id, vote_type: ['Upvote', 'Downvote'].sample)
        end
      end
    end
  end
