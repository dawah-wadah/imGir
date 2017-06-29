class RemoveVotesfromPosts < ActiveRecord::Migration
  def change
    remove_column :posts, :upvotes
    remove_column :posts, :downvotes
  end
end
