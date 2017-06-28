class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.includes(:comments).find(params[:id])
  end

  def create

    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
  end


  private

  def post_params
    params.require(:post).permit(:title, :points, :author_id, :description)
  end

  def image_params
    params.require(:image).permit(:image, :main_image)
  end
end
