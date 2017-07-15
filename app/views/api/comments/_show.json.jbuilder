json.extract! comment, :id, :body, :user_id, :parent_type, :parent_id, :created_at
json.username comment.user.username
json.points comment.upvotes.count - comment.downvotes.count
json.comment_ids comment.replies.map { |child_comment| child_comment.id }


if current_user
  vote = Vote.where('voter_id = :id and voteable_id = :comment and voteable_type = :type', id: current_user.id, comment: comment.id, type: 'Comment')

  json.vote vote[0] ? vote[0] : nil
else
  json.voted false
end
