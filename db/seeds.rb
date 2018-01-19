require 'faker'
require 'json'

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

def create_replies(comment, post_id, parent_id)
user_id = User.all.sample.id
Comment.create({
  user_id: user_id,
  parent_id: parent_id,
  parent_type: 'Comment',
  post_id: post_id,
  body: comment["comment"]
})
Vote.create({
  user_id: user_id,
  voteable_id: parent_id,
  voteable_type: 'Comment',
  vote_type: "Upvote"

})
if (comment["children"])
  comment["children"].reverse[0..2].each do |reply |
    create_replies(reply, post_id, parent_id)
  end
end

end

data_hash.each do |post |

    #puts post["images"].to_s
  bar = Post.create({
    title: post["title"],
    description: post["description"],
    user_id: User.all.sample.id
  })
post["images"].each do |image |
Image.create({
  imageable_id: bar.id,
  imageable_type: 'Post',
  image: image,
  main_image: true,
  description: "DESC"
})
end
post["comments"].reverse[0..20].each do |comment |
    user_id = User.all.sample.id
  c2 = Comment.create({
    user_id: user_id,
    parent_id: bar.id,
    parent_type: 'Post',
    post_id: bar.id,
    body: comment["comment"]
  })
Vote.create({
  user_id: user_id,
  voteable_id: bar.id,
  voteable_type: 'Post',
  vote_type: "Upvote"

})
if comment["children"]
comment["children"].reverse[0..5].each do |child |
    create_replies(child, bar.id, c2.id)
  end
end
end
end