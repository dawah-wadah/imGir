class Api::PostsController < ApplicationController

  def index
    @posts = if params[:user_id].present?
               Post.includes(:user, :main_image)
                   .where('user_id =(?)', params[:user_id])
             else
               Post.includes(:user, :main_image).all
             end
    render 'api/posts/index'
  end

  def show
    @post = Post.includes(:user, :images).find(params[:id])
    impressionist(@post)
    @comments = @post.comments.includes(:replies, :user)
  end

  # vote = Vote.find_by(user_id: current_user.id, voteable_type: 'Post', voteable_id: @post.id)
  def new

  end

  def create

    @post = Post.new(post_params)
    @post.user_id = current_user.id
    @user = User.find(@post.user_id)
    # @user.increment!(:votes)
    if @post.save
      # Vote.create!({user_id: @user.id, vote_type: 'Upvote', voteable_type: 'Post', voteable_id: @post.id})
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
    params.require(:post).permit(:title, :points, :user_id, :description)
  end
end
