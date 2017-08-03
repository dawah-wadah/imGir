class AddVotesToUser2 < ActiveRecord::Migration
  def change
    change_column :users, :votes, :integer, :default => 0
  end
end
