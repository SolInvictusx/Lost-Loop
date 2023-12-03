import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './css/styles.css';
import BeefPage from './OtherPages/BeefMain';
import MerchandisePage from './OtherPages/MerchandiseMain';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "beef",
    element: <BeefPage />,
  },
  {
    path: "merchandise",
    element: <MerchandisePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);