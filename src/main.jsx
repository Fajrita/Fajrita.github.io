import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.scss'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Navi from './components/Navi.jsx';
import Footer from './components/Footer.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navi/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>,
)
