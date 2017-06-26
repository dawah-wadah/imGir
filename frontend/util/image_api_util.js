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

export const uploadImage = (props) => (
  $.ajax({
    method: 'POST',
    url: 'api/images/',
    data: props ,
    contentType: false,
    processData: false,
  })
);

// export const uploadImage = ( props ) => {
// //debugger
//   return $.ajax({
//     method: 'POST',
//     url: 'api/images/',
//     data: props ,
//     contentType: false,
//     processData: false,
//   });
// };
