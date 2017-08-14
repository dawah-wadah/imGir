# == Schema Information
#
# Table name: posts
#
#  id               :integer          not null, primary key
#  title            :string           not null
#  description      :text
#  user_id          :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  impression_count :integer
#

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
