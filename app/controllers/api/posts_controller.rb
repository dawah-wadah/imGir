class Api::PostsController < ApplicationController
  def index
    @posts = if params[:author_id].present?
               Post.includes(:author, :main_image)
                   .where('author_id =(?)', params[:author_id])
             else
               Post.includes(:author, :main_image).all
             end
    render 'api/posts/index'
  end

  def show
    @post = Post.includes(:author, :images).find(params[:id])
    @comments = @post.comments.includes(:replies, :user)
  end

  # vote = Vote.find_by(voter_id: current_user.id, voteable_type: 'Post', voteable_id: @post.id)
  def new

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
end
