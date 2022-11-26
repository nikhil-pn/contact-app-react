import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { LayOut } from "./App";

import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { loadContacts, loadContactID } from "./loaders";
import Contact from "./contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LayOut />} loader={loadContacts}>
        <Route path="/contacts/:contactId" element={<Contact />} loader={({params})=>loadContactID(params.contactId)}></Route>
      </Route>
    </>
  )
);

function Hello() {
  return <h1>hello</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
