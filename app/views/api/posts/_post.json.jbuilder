json.title post.title
json.id post.id
json.description post.description
json.author_id post.author.id
json.author_name post.author.username
json.image_url asset_path(post.image.url)



json.set! :time_since, (post.created_at.to_f * 1000).floor
