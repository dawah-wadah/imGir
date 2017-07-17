class Api::SearchController < ApplicationController
  def index
    @posts = if params[:query].present? && params[:query].length > 1
               Post.includes(:author, :main_image)
                   .where('lower(title) LIKE (?)', "%#{params[:query].downcase}%")
             else
               Post.includes(:author, :main_image).all
             end
    render 'api/posts/index'
  end
end
