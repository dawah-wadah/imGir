class Api::ImagesController < ApplicationController

  def create
    @image = Image.new(image_params)
    klass = image_params[:imageable_type] == "Post" ? Post : Comment
    @imageable_item = klass.find(image_params[:imageable_id])

    if @image.save
    instance_variable_set("@#{klass}".downcase, @imageable_item)

      render "/api/#{"#{klass}".downcase}s/show"
    else
      render json: @image.errors.full_messages, status: 422
    end

  end

  def index
    @images = Image.all
  end

  def show
    @image = Image.find(params[:id])
  end

  def destroy
    @image = Image.find(params[:id])
  end

  private

  def image_params
    params.require(:image).permit(:image, :description, :main_image, :imageable_id, :imageable_type)
  end

end
