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
import AuthContaxProvider from './AuthContaxProvider';
import SpotDetails from './components/SpotDetails';
import UpdatePage from './pages/UpdatePage';
import PrivateRoute from './components/PrivateRoute';
// import SpotDetails from './components/SpotDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("https://b9a10-paradise-tours-server.vercel.app/paradiceTours")
      },
      {
        path: "/allTouristsSpot",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch("https://b9a10-paradise-tours-server.vercel.app/paradiceTours")
      },
      {
        path: "/addTouristsSpot",
        element: <PrivateRoute>
          <AddTouristsSpot></AddTouristsSpot>
        </PrivateRoute>,
      },
      {
        path: "/myList",
        element: <PrivateRoute>
          <MyList></MyList>
        </PrivateRoute>,

      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updatepage/:id",
        loader: ({ params }) => fetch(`https://b9a10-paradise-tours-server.vercel.app/paradiceTours/${params.id}`),
        element: <UpdatePage></UpdatePage>,
      },
      {
        path: "/item/:id",
        loader: ({ params }) => fetch(`https://b9a10-paradise-tours-server.vercel.app/paradiceTours/${params.id}`),
        element: <PrivateRoute>
          <SpotDetails></SpotDetails>
        </PrivateRoute>,
      },

    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContaxProvider>
      <RouterProvider router={router} />
    </AuthContaxProvider>
  </React.StrictMode>,
)
