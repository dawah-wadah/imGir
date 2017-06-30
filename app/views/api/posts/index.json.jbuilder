@posts.each do |post|
  json.set! post.id do
    json.title post.title
    json.id post.id
    json.description post.description
    json.author_id post.author.id
    json.author_name post.author.username
    json.upvotes post.upvote_count
    json.downvotes post.downvote_count
    json.totalvotes post.upvote_count - post.downvote_count
    json.main_image asset_path(post.main_image.image.url)
  end
end
