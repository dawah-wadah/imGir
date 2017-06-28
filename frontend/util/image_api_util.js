export const fetchImages = () => (
  $.ajax({
    method: 'GET',
    url: '/api/images',
  })
);

export const fetchImage = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/images/${id}`,
  })
);

export const uploadImage = (props) => {
  
  return (
  $.ajax({
    method: 'POST',
    url: 'api/images/',
    data: props,
    contentType: false,
    processData: false,
  })
)};
