class Api::PostsController < ApplicationController
  def index
    @posts = Post.includes(:author, :upvotes, :downvotes, :main_image, :comments)

  end

  def show
    @post = Post.includes(:author, :downvotes, :upvotes).find(params[:id])
    @comments = @post.comments.includes(:replies)
  end

  # vote = Vote.find_by(voter_id: current_user.id, voteable_type: 'Post', voteable_id: @post.id)
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
