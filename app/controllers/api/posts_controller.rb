
class Api::PostsController < ApplicationController
  def index
      @posts = Post.all
  end

  def show
    @post = Post.show(params[:id])[0]
  end

  def create
    @post = Post.create!(post_params)
    render :show
  end

  private
  def post_params
    params.require(:post).permit(:title, :points, :author_id, :description)
  end
end
