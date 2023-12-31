// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { Provider } from "react-redux";
// import { store, persistor } from "./redux/store";
// import { PersistGate } from "redux-persist/integration/react";

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading="null" persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById("root")
// );
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

const rootElement = document.getElementById('myRoot'); // Change 'root' to 'myRoot'

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
  <Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
      <App />
</PersistGate>
</Provider>
    </React.StrictMode>
);
