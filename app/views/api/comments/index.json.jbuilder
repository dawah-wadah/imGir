@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.user_id comment.user_id
    json.parent_id = comment.parent_id
    json.parent_type = comment.parent_type
    json.user_name comment.user.username
    json.body comment.body
    json.post_id comment.post_id
    json.replies_id comment.replies.map {|el| el.id }
    json.reply_count comment.replies.count
    json.set! :time_since, (comment.created_at.to_f * 1000).floor

  end
end
