import { Navigate, Route, Routes } from "react-router-dom";

import React from "react";
import { LoginRouteWrapper } from "./LoginRouteWrapper";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginRouteWrapper />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Navigate to="/summary" />} />
        <Route path="/summary" element={"summary"} />
        <Route path="/services" element={"services"} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
