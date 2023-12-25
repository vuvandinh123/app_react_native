import React from "react";
import "react-native-gesture-handler";
import Routes from "./src/Navigation/Routes";
import { Provider, useSelector } from "react-redux";
import store from "./src/redux/store";
export default function App() {

  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  );
}
