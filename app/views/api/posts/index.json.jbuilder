@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :title, :description
  end
end
