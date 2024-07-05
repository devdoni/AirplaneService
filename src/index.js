import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';

//import App from './App';
import reportWebVitals from './reportWebVitals';
// import App from './event/App';
// import App2 from './event/App2';
// import Gallery from './event/galleryugrade/Gallery';
// import App from './event/interval/App'
/// import Wrap from './hook/effect/Wrap'
// import Wrap from './map/Wrap';

// 이거 다시import Wrap from './airplaneservice/Wrap'

import App from './memoservice/App'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
    <App />
//  </React.StrictMode>
);


reportWebVitals();
