class CorrectlySpellDescription < ActiveRecord::Migration
  def change
    rename_column :posts, :descripton, :description
  end
end
