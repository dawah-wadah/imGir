class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false, index: true
      t.references :parent, polymorphic: true, index: true
      t.string :body
      t.timestamps null: false
    end
  end
end
