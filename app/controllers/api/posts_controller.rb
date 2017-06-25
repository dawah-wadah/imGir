
class Api::PostsController < ApplicationController
  def index
      @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.create!(post_params)
    render :show
  end

  def destroy
    @post = Post.find(params[:id])
  end


  private
  def post_params
    params.require(:post).permit(:title, :points, :author_id, :description)
  end
end
