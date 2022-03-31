import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
<<<<<<< HEAD
<<<<<<< HEAD
import FooterComp from "./component/footer/Footer";
=======
import Navbar  from "./component/navbar/Navbar";

>>>>>>> test
=======
import Navbar  from "./component/navbar/Navbar";

>>>>>>> parent of 7e65809 (update navbar,footer)

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
