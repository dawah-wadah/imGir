json.title post.title
json.id post.id
json.description post.description
json.author_id post.author.id
json.author_name post.author.username
json.upvotes post.upvotes
json.downvotes post.downvotes
json.totalvotes post.upvotes - post.downvotes
json.main_image asset_path(post.main_image.image.url)
json.images post.images.each do |image|
  json.title image.title
  json.image_url asset_path(image.image.url)
end



json.set! :time_since, (post.created_at.to_f * 1000).floor
