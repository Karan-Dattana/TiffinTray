// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import {store , persistor} from "./redux/store"


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <PersistGate persistor={persistor}>

//       <React.StrictMode>

//         <App />
//       </React.StrictMode>
//     </PersistGate>
//   </Provider>
// );



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store , persistor} from "./redux/store"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>

  </React.StrictMode>
);


