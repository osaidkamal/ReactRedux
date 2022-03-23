import { combineReducers } from "redux";
import CakeReducer from "./CakeReducer";
import IceReducer from "./icecream/IceReducer";
import UserReducer from "./user/UserReducer";
const RootReducer = combineReducers({
  cake: CakeReducer,
  iceCream: IceReducer,
  user: UserReducer,
});
export default RootReducer;
