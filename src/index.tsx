import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {Provider} from "react-redux";
import rootReducer from "./reducers/reducer";
import { createStore } from 'redux';
import license from "./license";
import './index.scss';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App license={license} />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
