json.title post.title
json.id post.id
json.description post.description
if current_user
  vote = Vote.where('voter_id = :id and voteable_id = :post and voteable_type = :type', id: current_user.id, post: post.id, type: 'Post')

  json.vote vote[0] ? vote[0] : nil
else
  json.voted false
end
json.author_id post.author.id
json.author_name post.author.username
json.upvotes post.upvote_count
json.downvotes post.downvote_count
json.totalvotes post.upvote_count - post.downvote_count
if post.images
  post.images.each do |_image|
    json.main_image asset_path(post.main_image.image.url)
    json.images post.images.each do |image|
      json.image_url asset_path(image.image.url)
    end
  end
end

json.comment_ids comments.map(&:id)

json.comments do
  @post.comments.map do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/show', comment: comment
    end
  end
end
# if comments
#   json.set! :comments do
#     comments.each do |comment|
#       json.set! comment.id do
#         json.partial! 'api/comments/comment', comment: comment
#       end
#     end
#   end
# end
