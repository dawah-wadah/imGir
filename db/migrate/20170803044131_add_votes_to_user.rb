class AddVotesToUser < ActiveRecord::Migration
  def change
    add_column :users, :votes, :integer

  end
end
