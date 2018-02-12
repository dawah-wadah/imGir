export const fetchPosts = (page) => {
  
  return (
  $.ajax({
    method: 'GET',
    url: '/api/posts?page=' + page,
  })
);};

export const fetchPost = (id) => {
  return (
  $.ajax({
    method: 'GET',
    url: `/api/posts/${id}`,
  })
);};

export const createPost = (props) => {
  return (
  $.ajax({
    method: 'POST',
    url: 'api/posts/',
    data: props ,
  })
);};

export const deletePost = (id) => {
  return (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`,
  })
);};
