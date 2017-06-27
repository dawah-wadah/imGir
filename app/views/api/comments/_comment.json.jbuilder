json.id comment.id
json.author_name comment.author.username
if comment.replies
  json.replies comment.replies.each do |reply|
      json.author_name reply.author.username
      json.body reply.body
    end
end


json.set! :time_since, (comment.created_at.to_f * 1000).floor
