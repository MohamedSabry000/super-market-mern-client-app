import { Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Profile from "./component/profile/Profile";
import Signup from "./component/signup/Signup";
import React from "react";
import { Navbar } from "./component/navbar/Navbar";

function App() {
  return (
    <>
      <Profile />
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}
    </>
  );
}

export default App;
