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
  belongs_to :parent, polymorphic: true
  has_many :replies, as: :parent, dependent: :destroy,
                     class_name: 'Comment'
end
