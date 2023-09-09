import "@hotwired/turbo-rails";
import "./controllers";
import React from "react";
import ReactDOM from 'react-dom'
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

function Index() {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)