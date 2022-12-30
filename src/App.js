import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/signup/signup";
import Forgot from "./Components/Forgot/Forgot";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Homepage/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/homepage" exact={true} element={<Home />} />
        <Route path="/" exact={true} element={<Login />} />
        <Route path="/Signup" exact={true} element={<Signup />} />
        <Route path="/Forgot" exact={true} element={<Forgot />} />
        <Route path="/" exact={true} element={<Forgot />} />
      </Routes>
    </>
  );
}
export default App;
