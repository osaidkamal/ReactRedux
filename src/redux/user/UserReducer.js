import { FAILURE, REQUEST, SUCCESS } from "./UserType";

const initalState = {
  loading: false,
  users: [],
  error: "",
};
const UserReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
