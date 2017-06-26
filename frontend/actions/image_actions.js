import * as ImageUtil from '../util/image_api_util';

export const RECEIVE_ALL_IMAGES = "RECEIVE_ALL_IMAGES";
export const RECEIVE_ONE_IMAGE = "RECEIVE_ONE_IMAGE";
export const RECEIVE_IMAGE_ERRORS = 'RECEIVE_IMAGE_ERRORS';

export const receiveAllImages = (images) => ({
  type: RECEIVE_ALL_IMAGES,
  images
});

export const receiveOneImage = (image) => ({
  type: RECEIVE_ONE_IMAGE,
  image
});

export const receiveImageErrors = errors => ({
  type: RECEIVE_IMAGE_ERRORS,
  errors
});


export const requestAllImages = () => (dispatch) => {
  return ImageUtil.fetchImages()
    .then(images => dispatch(receiveAllImages(images)));
};

export const requestSingleImage = (id) => (dispatch) => {
  return ImageUtil.fetchImage(id).then(image => {
    dispatch(receiveOneImage(image));
    return image;
  });
};

export const uploadImage = imageData => dispatch => {
  //debugger
  return(
  ImageUtil.uploadImage(imageData).then(image => {
    dispatch(receiveOneImage(image));
    return image;
  }).fail(err => dispatch(receiveImageErrors(err.responseJSON)))
)};
