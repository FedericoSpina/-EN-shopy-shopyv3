import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "../pages/shop/Shop";
import Layout from "../components/layout/Layout";
import Checkout from "../pages/checkout/Checkout";

import Login from "../pages/login/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <ProtectedRoutes preventUrl="/login">
              <Layout>
                <Routes>
                  <Route exact path="/" element={<Shop />} />
                  <Route exact path="/checkout" element={<Checkout />} />
                </Routes>
              </Layout>
            </ProtectedRoutes>
          }
        />

        <Route
          exact
          path="/login"
          element={
            <PublicRoute preventUrl="/">
              <Login />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
