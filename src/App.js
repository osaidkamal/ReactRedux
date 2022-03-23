import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/Store";
import { CakeContainer } from "./components/CakeContainer";
import { HookCakeContainer } from "./components/HookCakeContainer";
import { IceContainer } from "./components/IceContainer";
import { NewCakeContainer } from "./components/NewCakeContainer";
import { UserContainer } from "./components/UserContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HookCakeContainer />
        <IceContainer />
        <NewCakeContainer /> */}
        <UserContainer />
        {/* <CakeContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
