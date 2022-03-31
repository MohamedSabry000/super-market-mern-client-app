import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
import Navbar  from "./component/navbar/Navbar";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
