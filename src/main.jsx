import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import {BrowserRouter} from 'react-router-dom'

// eslint-disable-next-line
import "swiper/css/bundle";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
