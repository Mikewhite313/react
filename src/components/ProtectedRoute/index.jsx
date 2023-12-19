import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element: Element }) => {
  const { pathname } = useLocation();
  const anas = localStorage.getItem("anas");

  if (
    !anas &&
    [
      "/",
      "/signup",
      "/login",
      "/accountdropdownwithaccount",
      "/categorydropdown",
      "/wishlist",
      "/cart",
      "/checkout",
      "/account",
      "/about",
      "/contact",
      "/error",
      "/productdetailspage",
    ].includes(pathname)
  ) {
    return <Navigate to="/dhiwise-dashboard" />;
  }
  return <Element />;
};
