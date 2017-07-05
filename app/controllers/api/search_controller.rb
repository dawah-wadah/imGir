class Api::SearchController < ApplicationController

  def index
    if params[:query].present?
      @posts = Post.includes(:author).where('lower(title) LIKE (?)', "%#{params[:query].downcase}%")
    else
      @posts = Post.all
    end
  end


end
