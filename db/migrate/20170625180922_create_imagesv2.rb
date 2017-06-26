class CreateImagesv2 < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :post_id, null: false
      t.text :description
      t.string :title, null: false
      t.boolean :main_image, null: false, default: true
      t.references :imageable, polymorphic: true, index: true
      t.timestamps null: false
    end
  end
end
