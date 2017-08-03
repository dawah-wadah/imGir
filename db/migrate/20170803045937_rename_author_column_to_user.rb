class RenameuserColumnToUser < ActiveRecord::Migration
  def change
    rename_column :posts, :user_id, :user_id
    rename_column :votes, :user_id, :user_id
  end
end
