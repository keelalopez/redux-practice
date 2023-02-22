import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// STEP 1: IMPORT CREATESTORE METHOD AND SAVE IN A VARIABLE. 
import { createStore } from "redux";

// STEP 2: IMPORT PROVIDER
import { Provider } from "react-redux";

// STEP 5: IMPORT REDUCER FUNCTION
import cousinsReducer from "./features/cousins/cousinSlice";

// STEP 3: SAVE STORE
const store = createStore(
  cousinsReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // STEP 3: WRAP APP IN PROVIDER
  // STEP 4: PASS STORE 
  <Provider store={store}>
    <App />
  </Provider>,
  // add imports and code
  document.getElementById("root")
);


