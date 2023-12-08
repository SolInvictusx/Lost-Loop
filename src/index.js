import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './css/styles.css';
import BeefPage from './OtherPages/BeefMain';
import ContactPage from './OtherPages/ContactMain';

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
    path: "contact",
    element: <ContactPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);