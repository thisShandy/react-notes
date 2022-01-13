import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { rootReducer } from "./redux/reducers/rootReducer"
import { Provider } from "react-redux";
import { compose, createStore } from "redux";

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
