json.title post.title
json.id post.id
json.description post.description
json.author_id post.author.id
json.author_name post.author.username
json.upvotes post.upvotes.count
json.downvotes post.downvotes.count
json.totalvotes post.upvotes.count - post.downvotes.count
if post.images
  post.images.each do |_image|
    json.main_image asset_path(post.main_image.image.url)
    json.images post.images.each do |image|
      json.image_url asset_path(image.image.url)
    end
  end
end
if post.comments
  json.set! :comments do
    post.comments.each do |comment|
      json.set! comment.id do
        json.partial! 'api/comments/comment', comment: comment
      end
    end
  end
end

json.set! :time_since, (post.created_at.to_f * 1000).floor
