# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  upvotes     :integer          default(0), not null
#  downvotes   :integer          default(0), not null
#  description :text
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Post < ActiveRecord::Base
  validates :title, :author, presence: true

  belongs_to :author,
             class_name: :User,
             foreign_key: :author_id

  has_one :main_image,
          -> { where main_image: true },
          class_name: 'Image',
          foreign_key: :imageable_id
  has_many :upvotes, -> { where vote_type: 'Upvote' }, as: :voteable, class_name: "Vote"
  has_many :downvotes, -> { where vote_type: 'Downvote' }, as: :voteable, class_name: "Vote"
  has_many :comments, as: :parent, dependent: :destroy
  has_many :images, as: :imageable, dependent: :destroy
  has_many :album, as: :imageable, dependent: :destroy
end
