export const fetchImages = () => {
  return (
  $.ajax({
    method: 'GET',
    url: '/api/images',
  })
);};

export const fetchImage = (id) => {
  return (
  $.ajax({
    method: 'GET',
    url: `/api/images/${id}`,
  })
);};

export const uploadImage = image => {
  return (
  $.ajax({
    method: 'POST',
    url: '/api/images',
    data: image,
    contentType: false,
    processType: false,
  })
);};
