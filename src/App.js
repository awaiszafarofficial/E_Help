import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import Signup from './Components/signup/signup';
import Forgot from "./Components/Forgot/Forgot";
import Header from './Components/header/header';
import Home from './Components/homepage/homepage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/homepage" exact={true} element={<Home />}/>
      <Route path="/" exact={true} element={<Login />}/>
      <Route path="/Signup" exact={true} element={<Signup />}/>
      <Route path="/Forgot" exact={true} element={<Forgot/>}/>
      <Route path='/' exact={true} element={<Forgot/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
