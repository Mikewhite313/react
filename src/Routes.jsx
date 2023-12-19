import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { ProtectedRoute } from "components";
const ProductDetailspage = React.lazy(() => import("pages/ProductDetailspage"));
const Error = React.lazy(() => import("pages/Error"));
const Contact = React.lazy(() => import("pages/Contact"));
const About = React.lazy(() => import("pages/About"));
const Account = React.lazy(() => import("pages/Account"));
const CheckOut = React.lazy(() => import("pages/CheckOut"));
const Cart = React.lazy(() => import("pages/Cart"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const CategoryDropdown = React.lazy(() => import("pages/CategoryDropdown"));
const AccountDropdownWithaccount = React.lazy(
  () => import("pages/AccountDropdownWithaccount"),
);
const LogIn = React.lazy(() => import("pages/LogIn"));
const SignUp = React.lazy(() => import("pages/SignUp"));
const ECommerceHomePage = React.lazy(() => import("pages/ECommerceHomePage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<ProtectedRoute element={ECommerceHomePage} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/signup" element={<ProtectedRoute element={SignUp} />} />
          <Route path="/login" element={<ProtectedRoute element={LogIn} />} />
          <Route
            path="/accountdropdownwithaccount"
            element={<ProtectedRoute element={AccountDropdownWithaccount} />}
          />
          <Route
            path="/categorydropdown"
            element={<ProtectedRoute element={CategoryDropdown} />}
          />
          <Route
            path="/wishlist"
            element={<ProtectedRoute element={Wishlist} />}
          />
          <Route path="/cart" element={<ProtectedRoute element={Cart} />} />
          <Route
            path="/checkout"
            element={<ProtectedRoute element={CheckOut} />}
          />
          <Route
            path="/account"
            element={<ProtectedRoute element={Account} />}
          />
          <Route path="/about" element={<ProtectedRoute element={About} />} />
          <Route
            path="/contact"
            element={<ProtectedRoute element={Contact} />}
          />
          <Route path="/error" element={<ProtectedRoute element={Error} />} />
          <Route
            path="/productdetailspage"
            element={<ProtectedRoute element={ProductDetailspage} />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
