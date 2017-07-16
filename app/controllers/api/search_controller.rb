class Api::SearchController < ApplicationController
  def index
    @posts = if params[:query].present?
               Post.includes(:author, :main_image)
                   .where('lower(title) LIKE (?)', "%#{params[:query].downcase}%")
             else
               Post.includes(:author, :main_image).all
             end
    render 'api/posts/index'
  end
end
