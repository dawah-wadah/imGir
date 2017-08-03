# == Schema Information
#
# Table name: comments
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  parent_id   :integer
#  parent_type :string
#  body        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  post_id     :integer
#

class Comment < ActiveRecord::Base
  validates :user, :body, presence: true
  after_create :self_vote

  def self_vote
    self.user.increment!(:votes)
    Vote.create!(user_id: self.user.id, voteable_type: 'Comment', voteable_id: self.id, vote_type: %w[Upvote].sample)
  end
  belongs_to :user
  belongs_to :post
  has_one :main_image,
    through: :post
  belongs_to :parent, polymorphic: true
  has_many :upvotes, -> { where vote_type: 'Upvote' }, as: :voteable, class_name: 'Vote'
  has_many :downvotes, -> { where vote_type: 'Downvote' }, as: :voteable, class_name: 'Vote'
  has_many :replies, as: :parent, dependent: :destroy,
                     class_name: 'Comment'
end
