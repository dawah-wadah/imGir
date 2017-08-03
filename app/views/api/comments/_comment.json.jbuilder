
json.id comment.id
json.user_id comment.user_id
json.parent_id = comment.parent_id
json.parent_type = comment.parent_type
json.author_name comment.user.username
json.body comment.body
json.reply_count comment.replies.count
json.replies_id comment.replies.map(&:id)

json.set! :time_since, (comment.created_at.to_f * 1000).floor
