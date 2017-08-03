class Api::CommentsController < ApplicationController
  def index
  if params[:user_id].present? && params[:parent_type].present?
             @comments = Comment.includes(:user, :main_image).where("user_id =(?) AND parent_type=(?)", params[:user_id], params[:parent_type])
             render :user_comment
           else
             post = Post.find(params[:post_id])
             @comments = post.comments.order(created_at: :desc)
           end
  end

  def show

    @comment = Comment.includes(:replies, :user).find(params[:id])
  end

  def create

    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @user = User.find(@comment.user_id)
    @user.increment!(:votes)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy!
  end

  def update
    @comment = Comment.find(params[:id])
    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end


  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id, :parent_id, :parent_type)
  end
end
