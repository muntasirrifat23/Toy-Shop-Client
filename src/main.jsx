import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import All from './Component/All/All.jsx';
import AddToy from './Component/AddToy/AddToy.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import Blog from './Component/Blog/Blog.jsx';
import Main from './Component/Main/Main.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
        {
        path:'/',
        element:<Main></Main>
        },
        {
          path: "/all",
          element:<All></All> 
        },
        {
          path: "/add",
          element:<AddToy></AddToy>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/register",
          element:<Register></Register>
        },
        {
          path: "/blog",
          element:<Blog></Blog>,
        },
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
