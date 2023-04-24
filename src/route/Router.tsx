import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { allRoutes } from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {allRoutes.map((ele, i) => (
          <Route
            key={i}
            path={ele.path}
            element={
              <ProtectedRoute
                element={ele.element}
                access={ele.access}
                path={ele.path}
              />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
