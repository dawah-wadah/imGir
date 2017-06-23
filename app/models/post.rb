class Post < ActiveRecord::Base
  validates :title, :author, presence: true

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "senate.jpg"
validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  has_many :comments
  has_many :images

end
