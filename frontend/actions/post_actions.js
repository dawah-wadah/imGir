import * as PostUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_ONE_POST = "RECEIVE_ONE_POST";
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receiveOnePost = (post) => ({
  type: RECEIVE_ONE_POST,
  post
});

export const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
});


export const requestAllPosts = () => (dispatch) => {
  return PostUtil.fetchPosts()
    .then(posts => dispatch(receiveAllPosts(posts)));
};

export const requestOnePost = (id) => (dispatch) => {
  return PostUtil.fetchPost(id).then(post => {
    dispatch(receiveOnePost(post));
    return post;
  });
};

export const createPost = postdata => dispatch => (
  PostUtil.createPost(postdata).then(post => {
    dispatch(receiveOnePost(post));
    return post;
  }).fail(err => dispatch(receivePostErrors(err.responseJSON)))
);
export const deletePost = id => dispatch => (
  PostUtil.deletePost(id).then(post => {
    dispatch(receiveAllPosts());
    return post;
  }).fail(err => dispatch(receivePostErrors(err.responseJSON)))
);
