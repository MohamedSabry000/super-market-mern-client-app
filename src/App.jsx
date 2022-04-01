import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./component/login/Login";
import Profile from "./component/profile/Profile";
import Signup from "./component/signup/Signup";
import Error from "./component/error/Error";

import React from "react";
import useToken from "./utils/hooks/useToken";

function App() {

  const {token, setToken} = useToken();

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/profile" element={<Profile />} />
        {
          !token ? 
          <>
            <Route path="/profile" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login setToken={setToken} />} /> 
            <Route path="/signup" element={<Signup setToken={setToken} />} />
          </>
          :
          <>
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/signup" element={<Navigate to="/" />} />
          </>
        }
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
