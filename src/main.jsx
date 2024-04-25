import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './root/Root';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import AllTouristsSpot from './pages/AllTouristsSpot';
import AddTouristsSpot from './pages/AddTouristsSpot';
import MyList from './pages/MyList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/allTouristsSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path: "/addTouristsSpot",
        element: <AddTouristsSpot></AddTouristsSpot>,
      },
      {
        path: "/myList",
        element: <MyList></MyList>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
