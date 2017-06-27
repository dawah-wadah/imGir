# == Schema Information
#
# Table name: images
#
#  id                 :integer          not null, primary key
#  description        :text
#  title              :string           not null
#  main_image         :boolean          default(TRUE), not null
#  imageable_id       :integer
#  imageable_type     :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Image < ActiveRecord::Base
  validates :title, presence: true
  belongs_to :imageable, polymorphic: true

  has_attached_file :image, styles: { medium: '300x300>', thumb: '100x100>' }, default_url: 'senante.jpg'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
