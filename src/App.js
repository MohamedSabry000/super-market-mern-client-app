import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar  from "./component/navbar/Navbar";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
<<<<<<< HEAD
import FooterComp from "./component/footer/Footer";
=======
import Navbar  from "./component/navbar/Navbar";

>>>>>>> test

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </>
  );
}

export default App;
