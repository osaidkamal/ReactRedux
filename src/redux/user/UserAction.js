import { REQUEST, SUCCESS, FAILURE } from "./UserType";
export const request = () => {
  return {
    type: REQUEST,
  };
};
export const success = (users) => {
  return {
    type: SUCCESS,
    payload: users,
  };
};
export const failure = (error) => {
  return {
    type: FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(request);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        res.json().then((response) => {
          console.log(response);
          dispatch(success(response));
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch(failure(error));
      });
  };
};
