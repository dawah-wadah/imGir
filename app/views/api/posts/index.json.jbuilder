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
    # json.totalvotes post.upvotes.count - post.downvotes.count
    json.main_image asset_path(post.main_image.image.url)
  end
end

# json.partial! 'api/posts/post', post: post
#
# if post.images
#   post.images.each do |_image|
#     json.images post.images.each do |image|
#       json.title image.title
#       json.image_url asset_path(image.image.url)
#     end
#   end
# end
