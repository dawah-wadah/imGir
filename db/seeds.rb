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
    post["comments"].each do |comment|
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
# links = [
#   "https://i.imgur.com/HvFb6X8.gif",
# "https://i.imgur.com/gVRBlOD.gif",
# "https://i.imgur.com/0HzLDq1.gif",
# "https://i.imgur.com/cMbFuNE.gif",
# "https://i.imgur.com/EtGhzOb.gif",
# "https://i.imgur.com/PXae3AQ.gif",
# "https://i.imgur.com/AIl1zkm.gif",
# "https://i.imgur.com/bfxdauk.gif",
# "https://i.imgur.com/LoJLxP4.gif",
# "https://i.imgur.com/HxLfe73g.jpg",
# "https://i.imgur.com/GJGYcOJg.jpg",
# "https://i.imgur.com/QZQTN9xg.jpg",
# "https://i.imgur.com/HxLfe73.jpg",
# "https://i.imgur.com/GJGYcOJ.jpg",
# "https://i.imgur.com/QZQTN9x.jpg",
# "https://i.imgur.com/C7ZG5MJ.gif",
# "https://i.imgur.com/FQfaA2s.gif",
# "https://i.imgur.com/kCtEGp0.gif",
# "https://i.imgur.com/FYiQ0dF.png",
# "https://i.imgur.com/DKWsYqY.jpg",
# "https://i.imgur.com/5p2MCmN.gif",
# "https://i.imgur.com/ZyUSOpm.gif",
# "https://i.imgur.com/7fdK5Nk.gif",
# "https://i.imgur.com/pwM6Tx4.gif",
# "https://i.imgur.com/YE63Te2.gif",
# "https://i.imgur.com/24hOcqL.jpg",
# "https://i.imgur.com/KGaF23E.gif",
# "https://i.imgur.com/p5459Wr.gif",
# "https://i.imgur.com/kCvmGyk.gif",
# "https://i.imgur.com/dBppIgQ.gif",
# "https://i.imgur.com/ttWL8G6.gif",
# "https://i.imgur.com/DYmTNEZ.gif",
# "https://i.imgur.com/sn6phYQ.gif",
# "https://i.imgur.com/d6D6yK0.gif",
# "https://i.imgur.com/EVoUolV.gif",
# "https://i.imgur.com/lnV93yk.gif",
# "https://i.imgur.com/eTxQdmW.gif",
# "https://i.imgur.com/wOSWO0T.gif",
# "https://i.imgur.com/oYt0p5F.gif",
# "https://i.imgur.com/pm0xdSE.gif",
# "https://i.imgur.com/aL24Y3G.gif",
# "https://i.imgur.com/xtz7rGh.gif",
# "https://i.imgur.com/bQx5ttQ.gif",
# "https://i.imgur.com/rNauOZJ.png",
# "https://i.imgur.com/IxUdqiU.jpg",
# "http://33.media.tumblr.com/tumblr_lyd7bb9tzW1r6h95jo1_500.gif",
# "https://i.imgur.com/883eUED.gif",
# "https://i.imgur.com/aYCp7IP.gif",
# "https://i.imgur.com/MN0tBhJ.gif",
# "https://i.imgur.com/z0aLZLY.gif",
# "https://i.imgur.com/JSskEbb.gif",
# "https://i.imgur.com/czZCrRt.gif",
# "https://i.imgur.com/mSw31S0.gif",
# "https://i.imgur.com/Od8SlF0.gif",
# "https://i.imgur.com/AP5WFS5.gif",
# "https://i.imgur.com/b4Pk9yv.gif",
# "https://i.imgur.com/zVMWCNi.gif",
# "https://i.imgur.com/qNnAjCU.gif",
# "https://i.imgur.com/JbsDaFS.gif",
# "https://i.imgur.com/qM1ZVa7.gif",
# "https://i.imgur.com/MRaTmRD.gif",
# "https://i.imgur.com/qXe7DvR.gif",
# "https://i.imgur.com/Iqj3c5w.gif",
# "https://i.imgur.com/wQS0j5M.gif",
# "https://i.imgur.com/r4iiJGo.gif",
# "https://i.imgur.com/ftAlELU.jpg",
# "https://i.imgur.com/yl8UCt0.jpg",
# "https://i.imgur.com/XLH7rFug.jpg",
# "https://i.imgur.com/2DYHWoi.png",
# "https://i.imgur.com/Zdck72W.png",
# "https://i.imgur.com/9JdgyMA.jpg",
# "https://i.imgur.com/XLH7rFu.jpg",
# "https://i.imgur.com/2Pcoz.gif",
# "https://i.imgur.com/4JNMXS7.gif",
# "https://i.imgur.com/uCeMTGV.gif",
# "https://i.imgur.com/1lHS0wr.gif",
# "https://i.imgur.com/aSYSID3.gif",
# "https://i.imgur.com/y170QmI.gif",
# "https://i.imgur.com/ehgvnyx.gif",
# "https://i.imgur.com/wQBvNTW.gif",
# "https://i.imgur.com/zKzPQsw.gif",
# "https://i.imgur.com/kM0drgr.jpg",
# "https://i.imgur.com/rLiaUp1.gif",
# "https://i.imgur.com/OQUD3RC.gif",
# "http://sciblogs.co.nz/app/uploads/2011/04/TOAST-invader-zim-6223825-1024-768.gif"
# ]

#   60.times do
#   post = Post.create({
#     title: Faker::RickAndMorty.quote,
#     description: Faker::RickAndMorty.quote,
#     user_id: User.all.sample.id
#     })
#     2.times do
#       Image.create({
#         imageable_id: post.id,
#         imageable_type: 'Post',
#         image: links.sample,
#         main_image: true,
#         description: Faker::RickAndMorty.quote
#     })
#       6.times do
#       comment = Comment.create({
#           user_id: User.all.sample.id,
#           parent_id: post.id,
#           parent_type: 'Post',
#           post_id: post.id,
#           body: Faker::RickAndMorty.quote
#         })
#         rand(5).times do
#         Comment.create({
#           user_id: User.all.sample.id,
#           parent_id: comment.id,
#           parent_type: 'Comment',
#           post_id: post.id,
#           body: Faker::RickAndMorty.quote
#           })
#         end
#       end
#     end
# end
#   30.times do
#   post = Post.create({
#     title: Faker::HitchhikersGuideToTheGalaxy.quote,
#     description: Faker::HitchhikersGuideToTheGalaxy.quote,
#     user_id: User.all.sample.id
#     })
#     2.times do
#       Image.create({
#         imageable_id: post.id,
#         imageable_type: 'Post',
#         image: links.sample,
#         main_image: true,
#         description: Faker::HitchhikersGuideToTheGalaxy.quote
#     })
#       6.times do
#       comment = Comment.create({
#           user_id: User.all.sample.id,
#           parent_id: post.id,
#           parent_type: 'Post',
#           post_id: post.id,
#           body: Faker::HitchhikersGuideToTheGalaxy.quote
#         })
#         rand(5).times do
#         Comment.create({
#           user_id: User.all.sample.id,
#           parent_id: comment.id,
#           parent_type: 'Comment',
#           post_id: post.id,
#           body: Faker::HitchhikersGuideToTheGalaxy.quote
#           })
#         end
#       end
#     end
# end
# User.all.each do |user|
#   Vote.create!(user_id: user.id, voteable_type: 'Post', voteable_id: new_post.id, vote_type: ['Upvote', 'Downvote'].sample)
# end
# end
