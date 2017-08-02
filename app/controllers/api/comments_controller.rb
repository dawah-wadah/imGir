class Api::CommentsController < ApplicationController
  def index
  @comments = if params[:author_id].present? && params[:parent_type].present?
             Comment.includes(:user, :replies).where("user_id =(?) AND parent_type=(?)", params[:author_id], params[:parent_type])
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
