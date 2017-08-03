class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.integer :upvotes, null: false, default: 0
      t.integer :downvotes, null: false, default: 0
      t.text :descripton
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
