import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./component/login/Login";
import Profile from "./component/profile/Profile";
import Signup from "./component/signup/Signup";
import Error from "./component/error/Error";
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/products/:id" element={<Profile />} />
        <Route path=":id" element={<Profile />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
