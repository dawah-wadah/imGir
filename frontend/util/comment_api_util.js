export const fetchComments = () => (
  $.ajax({
    method: 'GET',
    url: '/api/comments',
  })
);

export const fetchComment = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${id}`,
  })
);

export const createComment = (props) => (
  $.ajax({
    method: 'POST',
    url: 'api/comments/',
    data: props,
    contentType: false,
    processData: false,
  })
);
