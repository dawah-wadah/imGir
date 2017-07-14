export const fetchComments = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${id}/comments`,
  })
);

export const fetchComment = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${id}`,
  })
);

export const createComment = (props) => {

  return (
  $.ajax({
    method: 'POST',
    url: 'api/comments/',
    data: props,
  })
);};
