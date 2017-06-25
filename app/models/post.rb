# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  upvotes            :integer          default(0), not null
#  downvotes          :integer          default(0), not null
#  description        :text
#  author_id          :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Post < ActiveRecord::Base
  validates :title, :author, presence: true

  has_attached_file :image, styles: {medium: "300x300>", thumb: "100x100>" }, default_url: "senate.jpg"
validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  has_one :main_image,
-> { where main_image: true },
    class_name: 'Image',
    foreign_key: :post_id

  has_many :comments
  has_many :images

end
