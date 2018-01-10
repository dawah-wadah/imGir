require 'faker'
require 'json'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or create!d alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create!([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create!(name: 'Emanuel', city: cities.first)
file = File.read('db/message.json')
data_hash = JSON.parse(file)

User.create!(username: 'Wadah', password: 'password')
User.create!(username: 'Yaakov', password: 'password')
User.create!(username: 'Musgrave', password: 'SpursSpurs123')
User.create!(username: 'Chris_Hakos', password: 'password')
User.create!(username: 'CalvinLEE', password: 'password')
User.create!(username: 'WP_Johnson', password: 'password')
User.create!(username: 'BAIKEN', password: 'password')
User.create!(username: 'Jesus Christ', password: 'password')
User.create!(username: 'MikeBoan', password: 'password')
User.create!(username: 'Oscar', password: 'password')
User.create!(username: 'WenBoooooook', password: 'password')
User.create!(username: 'Mos_Steph', password: 'password')
User.create!(username: 'McBennett', password: 'password')
User.create!(username: 'Nick_da_Greek', password: 'password')
User.create!(username: 'PapaMikeNoel', password: 'password')
User.create!(username: 'TheRealSeanSnyder', password: 'password')
User.create!(username: 'TheFakeSeanChowdhury', password: 'password')
User.create!(username: 'JohnBaek', password: 'password')
User.create!(username: 'Martinian', password: 'password')
User.create!(username: 'Kingsley_Shacklebolt', password: 'password')
User.create!(username: '3r1cVooo', password: 'password')
User.create!(username: 'AmmarWonderWall', password: 'password')
User.create!(username: 'Nathaniel_Thorn', password: 'password')
User.create!(username: 'NathanNathan', password: 'password')
User.create!(username: 'Nathan', password: 'password')
User.create!(username: 'Tommy_Pickles', password: 'password')





def create_replies(comment, post, com)
        Comment.create({
          user_id: User.all.sample.id,
          parent_id: com,
          parent_type: 'Comment',
          post_id: post,
          body: comment["comment"]
          })
          if (comment["children"]) 
            comment["children"].each do |reply|
            create_replies(reply, post, com)
            end
        end

end

data_hash.each do |post|

  # puts post["images"].to_s
bar = Post.create({
    title: post["title"],
    description: post["description"],
    user_id: User.all.sample.id
    })
    post["images"].each do |image|
      Image.create({
        imageable_id: bar.id,
        imageable_type: 'Post',
        image: image,
        main_image: true,
        description: Faker::RickAndMorty.quote
    })
    end
    post["comments"][0..30].each do |comment|
      c2 = Comment.create({
          user_id: User.all.sample.id,
          parent_id: bar.id,
          parent_type: 'Post',
          post_id: bar.id,
          body: comment["comment"]
        })
        if comment["children"]
        comment["children"].each do |child|
          create_replies(child, bar.id, c2.id)
        end
    end
  end
end
