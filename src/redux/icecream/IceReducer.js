import { buy_icecream } from "./IceType";

const initialState = {
  numOfIcecream: 30,
};
const IceReducer = (state = initialState, action) => {
  switch (action.type) {
    case buy_icecream:
      return {
        ...state,
        numOfIcecream: state.numOfIcecream - 1,
      };
    default:
      return state;
  }
};
export default IceReducer;
