import * as VoteUtil from '../util/vote_api_util';
import { receiveOnePost } from './post_actions';


export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_ONE_POST = "RECEIVE_ONE_POST";
export const RECEIVE_VOTE_ERRORS = 'RECEIVE_VOTE_ERRORS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const createVote = voteData => dispatch => (
  VoteUtil.createVote(voteData).then(post => {
    dispatch(receiveOnePost(post));
    return post;
  })
);

export const editVote = voteData => dispatch => (
  VoteUtil.editVote(voteData).then(post => {
    dispatch(receiveOnePost(post));
    return post;
  })
);
export const deleteVote = id => dispatch => (
  VoteUtil.deleteVote(id).then(post => {
    dispatch(receiveOnePost(post));
    return post;
  })
);
