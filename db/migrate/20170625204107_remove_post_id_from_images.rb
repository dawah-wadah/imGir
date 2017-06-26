class RemovePostIdFromImages < ActiveRecord::Migration
  def change
    remove_column :images, :post_id
  end
end
