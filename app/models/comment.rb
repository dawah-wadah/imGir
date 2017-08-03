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
#  post_id     :integer          not null
#

class Comment < ActiveRecord::Base
  validates :user, :body, presence: true
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
