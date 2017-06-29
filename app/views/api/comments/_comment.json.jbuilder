json.id comment.id
json.user_id comment.user_id
json.author_name comment.user.username
json.body comment.body
if comment.replies
  json.replies comment.replies.each do |reply|
    json.user_id comment.user_id
    json.author_name reply.user.username
    json.body reply.body
    json.replies reply.replies
  end
end

json.set! :time_since, (comment.created_at.to_f * 1000).floor
