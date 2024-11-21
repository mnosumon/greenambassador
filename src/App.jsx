import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./peges/home/Index";
import RouteLayout from "./peges/routeLayout/RouteLayout";
import Challange from "./peges/challange/Index";
import About from "./peges/about/Index";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/challange" element={<Challange />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
