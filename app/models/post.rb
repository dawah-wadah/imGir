class Post < ActiveRecord::Base
  validates :title, :user, presence: true

  belongs_to :user,
    foreign_key: :author_id

  has_many :comments
  has_many :images

end
