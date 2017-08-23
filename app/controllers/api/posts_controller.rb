class Api::PostsController < ApplicationController

  def index
    @posts = if params[:user_id].present?
              if params[:type] == 'favorites'
                Post.includes(:user, :main_image)
                .joins("INNER JOIN  votes ON votes.voteable_id = posts.id AND votes.voteable_type = 'Post' AND votes.vote_type = 'Upvote'")
                .joins("INNER JOIN users ON votes.user_id = #{params[:user_id]}")
                .uniq
              else
                Post.includes(:user, :main_image)
                .where('user_id =(?)', params[:user_id])
              end
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

  def new

  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    @user = User.find(@post.user_id)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end


  private

  def post_params
    params.require(:post).permit(:title, :points, :user_id, :description, :type)
  end
end
