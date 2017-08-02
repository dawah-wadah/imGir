export const fetchUser = (id) => {
  return (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
  })
);};


export const fetchUserPosts = author_id => (
  $.ajax({
    method: 'get',
    url: '/api/posts',
    data: { author_id }
  })
);
export const fetchUserComments = author_id => (
  $.ajax({
    method: 'get',
    url: '/api/comments',
    data: { author_id }
  })
);

export const fetchComments = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${id}/comments`,
  })
);

export const RECEIVE_ONE_USER = "RECEIVE_ONE_USER";
export const RECEIVE_USER_POSTS = 'RECEIVE_USER_POSTS'
export const RECEIVE_USER_COMMENTS = 'RECEIVE_USER_COMMENTS'

export const receiveOneUser = (user) => ({
  type: RECEIVE_ONE_USER,
  user
});

export const receiveUserPosts = posts => ({
  type: RECEIVE_USER_POSTS,
  posts
})
export const receiveUserComments = comments => ({
  type: RECEIVE_USER_COMMENTS,
  comments
})


export const requestOneUser = (id) => (dispatch) => {
  return fetchUser(id).then(user => {
    dispatch(receiveOneUser(user));
    return user;
  });
};
export const requestUserPosts = (id) => (dispatch) => {
  return fetchUserPosts(id).then(posts => {
    dispatch(receiveUserPosts(posts));
    return posts;
  });
};
export const requestUserComments = (id) => (dispatch) => {
  return fetchUserComments(id).then(comments => {
    dispatch(receiveUserComments(comments));
    return comments;
  });
};
