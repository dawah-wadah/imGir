@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.user_id comment.user_id
    json.user_name comment.user.username
    json.body comment.body
    json.reply_count comment.replies.count
    json.set! :time_since, (comment.created_at.to_f * 1000).floor
    json.post_id comment.post_id
    json.points comment.upvotes.count - comment.downvotes.count
    json.main_image asset_path(comment.main_image.image.url(:thumb))

  end
end
