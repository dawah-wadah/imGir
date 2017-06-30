

json.results do
  @posts.each do |post|
    json.set! post.id do
      json.title post.title
      json.id post.id
      json.author_id post.author.id
      json.author_name post.author.username
      json.main_image asset_path(post.main_image.image.url)
    end
  end
end
