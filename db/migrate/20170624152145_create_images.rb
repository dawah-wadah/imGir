class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :post_id, null: false
      t.string :title, null: false
      t.boolean :main_image, null: false, default: true
      t.text :description

      t.timestamps null: false
    end
  end
end
