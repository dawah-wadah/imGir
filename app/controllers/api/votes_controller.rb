class Api::VotesController < ApplicationController
  def create

    vote = Vote.new(vote_params)
    vote.user_id = current_user.id
    klass = vote_params[:voteable_type] == "Post" ? Post : Comment
    @voteable_item = klass.find(vote_params[:voteable_id])

    if(vote.save)
      instance_variable_set("@#{klass}".downcase, @voteable_item)
      if vote_params[:vote_type] == 'Upvote'
        @voteable_item.user.increment!(:votes)
      else
        @voteable_item.user.decrement!(:votes)
      end
      render "/api/#{"#{klass}".downcase}s/show"
    else
      @errors = vote.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def update
    vote = Vote.find(params[:id])
    if vote.update(vote_params)
      klass = vote_params[:voteable_type] == "Post" ? Post : Comment
      @voteable_item = klass.find(vote_params[:voteable_id])
      instance_variable_set("@#{klass}".downcase, @voteable_item)
      if vote_params[:vote_type] == 'Upvote'
        @voteable_item.user.increment!(:votes)
      else
        @voteable_item.user.decrement!(:votes)
      end
      render "/api/#{"#{klass}".downcase}s/show"
    else
      @errors = vote.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def destroy
    vote = Vote.find(params[:id])
    if vote.destroy
      klass = vote[:voteable_type] == "Post" ? Post : Comment
      @voteable_item = klass.find(vote[:voteable_id])
      instance_variable_set("@#{klass}".downcase, @voteable_item)
      if vote[:vote_type] == 'Upvote'
        @voteable_item.user.decrement!(:votes)
      else
        @voteable_item.user.increment!(:votes)
      end
      render "/api/#{"#{klass}".downcase}s/show"
    else
      @errors = vote.errors.full_messages
      render json: @errors, status: 422
    end
  end

  private

  def vote_params
    params.require(:vote).permit(:id, :user_id, :vote_type, :voteable_id, :voteable_type)
  end
end
