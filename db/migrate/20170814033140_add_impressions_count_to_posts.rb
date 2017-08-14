class AddImpressionsCountToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :impression_count, :integer
  end
end
