# == Schema Information
#
# Table name: images
#
#  id                 :integer          not null, primary key
#  post_id            :integer          not null
#  title              :string           not null
#  main_image         :boolean          default(TRUE), not null
#  description        :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Image < ActiveRecord::Base
  validates :post_id, :title, presence: true
  belongs_to :post

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "senante.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

end
