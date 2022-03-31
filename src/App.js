import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar  from "./component/navbar/Navbar";
import Home from "./component/homepage/Home";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
//import FooterComp from "./component/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        {/*<FooterComp /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
