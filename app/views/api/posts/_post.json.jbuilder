json.extract! post, :id, :title, :description, :user


json.set! :time_since, (post.created_at.to_f * 1000).floor
