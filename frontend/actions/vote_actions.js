import * as VoteUtil from '../util/vote_api_util';
import {
  receiveOnePost
} from './post_actions';
import {
  receiveOneComment
} from './comment_actions';


export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_ONE_POST = "RECEIVE_ONE_POST";
export const RECEIVE_VOTE_ERRORS = 'RECEIVE_VOTE_ERRORS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const createVote = voteData => dispatch => {
  let action;
  voteData.vote.voteable_type === 'Post' ?
  action = receiveOnePost :
  action = receiveOneComment;

    return VoteUtil.createVote(voteData).then(votedItem => {
      dispatch(action(votedItem));
      return votedItem;
    });
};

export const editVote = voteData => dispatch => {
  let action;
  
  voteData.vote.voteable_type === 'Post' ?
  action = receiveOnePost :
  action = receiveOneComment;

  VoteUtil.editVote(voteData).then(votedItem => {
    dispatch(action(votedItem));
    return votedItem;
  });
};
export const deleteVote = (params) => dispatch => {
  let action;
  params.voteable_type === 'Post' ?
  action = receiveOnePost :
  action = receiveOneComment;

  VoteUtil.deleteVote(params).then(votedItem => {
    dispatch(action(votedItem));
    return votedItem;
  });
};
