class Changlenullofcomments < ActiveRecord::Migration
  def change
    change_column :comments, :post_id, :integer, null: true
  end
end
