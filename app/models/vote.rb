# == Schema Information
#
# Table name: votes
#
#  id            :integer          not null, primary key
#  voter_id      :integer          not null
#  voteable_id   :integer
#  voteable_type :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  vote_type     :string
#

class Vote < ActiveRecord::Base
  validates :vote_type, :voter_id, :votable_type, presence: true
  validates :user_id, uniqueness: { scope: %i[votable_id votable_type] }

  belongs_to :voter, class_name: 'User'
  belongs_to :votable, polymorphic: true
end
