# == Schema Information
#
# Table name: votes
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  voteable_id   :integer
#  voteable_type :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  vote_type     :string
#

class Vote < ActiveRecord::Base
  validates :vote_type, :user_id, :voteable_type, presence: true
  validates :user_id, uniqueness: { scope: %i[voteable_id voteable_type] }

  

  belongs_to :user
  belongs_to :voteable, polymorphic: true

  scope :upvotes, -> { where(vote_type: 'Upvote')}
end
