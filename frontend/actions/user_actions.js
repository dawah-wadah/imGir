export const fetchUser = (id) => {
  return (
  $.ajax({
    method: 'GET',
    url: `/api/users/${id}`,
  })
);};

export const RECEIVE_ONE_USER = "RECEIVE_ONE_USER";

export const receiveOneUser = (user) => ({
  type: RECEIVE_ONE_USER,
  user
});


export const requestOneUser = (id) => (dispatch) => {
  return fetchUser(id).then(user => {
    dispatch(receiveOneUser(user));
    return user;
  });
};
