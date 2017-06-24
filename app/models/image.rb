class Image < ActiveRecord::Base
  validates :post_id, :title, presence: true
  belongs_to :post

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "senante.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

end
