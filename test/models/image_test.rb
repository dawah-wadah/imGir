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

require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
