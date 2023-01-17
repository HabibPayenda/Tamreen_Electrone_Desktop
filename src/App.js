import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import StudiosScreen from "./screens/StudiosScreen";
import MainScreen from "./screens/MainScreen";
import UsersScreen from "./screens/UsersScreen";
import EmployesScreen from "./screens/EmployesScreen";
import PostsScreen from "./screens/PostsScreen";

import reducers from "./store/reducers";

function App() {
  const store = createStore(reducers, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={MainScreen} />
        <Route path="/studios" exact component={StudiosScreen} />
        <Route path="/users" exact component={UsersScreen} />
        <Route path="/employes" exact component={EmployesScreen} />
        <Route path="/posts" exact component={PostsScreen} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
