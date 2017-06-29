class Api::VotesController < ApplicationController
  def create

    vote = Vote.new(vote_params)
    vote.voter_id = current_user.id
    if(vote.save)
      if vote.voteable_type == "Post"
        @post = vote.voteable
      else
        @post = vote.voteable.post
      end
      render "api/posts/show"
    else
      @errors = vote.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def update
    vote = Vote.find(params[:id])

    if vote.update(vote_params)
      if vote.voteable_type == "Post"
        @post = vote.voteable
      else
        @post = vote.voteable.post
      end
      render "api/posts/show"
    else
      @errors = vote.errors.full_messages
      render json: @errors, status: 422
    end
  end

  def destroy
    vote = Vote.find(params[:id])

    if(vote.destroy)
      if vote.voteable_type == "Post"
        @post = vote.voteable
      else
        @post = vote.voteable.post
      end
      render "api/posts/show"
    else
      @errors = vote.errors.full_messages
      render json: @errors, status: 422
    end
  end

  private
  def vote_params
    params.require(:vote).permit(:id, :voter_id, :vote_type, :voteable_id, :voteable_type)
  end
end
