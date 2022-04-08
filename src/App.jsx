import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./component/login/Login";
import Profile from "./component/profile/Profile";
import Signup from "./component/signup/Signup";
import Error from "./component/error/Error";
import Home from "./component/homepage/Home";
import AboutUss from "./component/aboutus/AboutUs";
import AddProduct from "./component/addproduct/addproduct";
import Product from "./component/product/product";
import React from "react";
import useToken from "./utils/hooks/useToken";
import Arrow from "./component/arrow/Arrow";

function App() {
  const { token, setToken } = useToken();

  <Route path="*" element={<Error />} />;
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />

        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUss />} />

        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/product" element={<Product />}>
          <Route path=":id" element={<Product />} />
        </Route>

        {!token ? (
          <>
            <Route path="/profile" element={<Navigate to="/login" />} />
            <Route path="/addproduct" element={<Navigate to="/login" />} />

            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/signup" element={<Signup setToken={setToken} />} />

            <Route path="/addproduct" element={<Navigate to="/login" />}>
              <Route path=":id" element={<Navigate to="/login" />} />
            </Route>
          </>
        ) : (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/addproduct" element={<AddProduct />} />

            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/signup" element={<Navigate to="/" />} />

            <Route path="/addproduct" element={<AddProduct />}>
              <Route path=":id" element={<AddProduct />} />
            </Route>
          </>
        )}
        <Route path="*" element={<Error />} />
      </Routes>
      <Arrow />
    </>
  );
}

export default App;
