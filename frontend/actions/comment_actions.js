import * as CommentUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_ONE_COMMENT = "RECEIVE_ONE_COMMENT";
export const CREATE_COMMENT = "CREATE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveAllComments = (comments) => {

  return ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});
};


export const receiveOneComment = (comment) => ({
  type: RECEIVE_ONE_COMMENT,
  comment
});

export const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});


export const requestAllComments = id => dispatch => {
  return CommentUtil.fetchComments(id)
    .then(comments => dispatch(receiveAllComments(comments)));
};

export const requestOneComment = (id) => (dispatch) => {
  return CommentUtil.fetchComment(id).then(comment => {
    dispatch(receiveOneComment(comment));
    return comment;
  });
};

export const createComment = commentdata => dispatch => (
  CommentUtil.createComment(commentdata).then(comment => {
    dispatch(receiveOneComment(comment));
    return comment;
  }).fail(err => dispatch(receiveCommentErrors(err.responseJSON)))
);
