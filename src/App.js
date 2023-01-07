import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./auth/Home";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Dashboard from "./auth/Dashboard";
import { useSelector } from "react-redux";

function App()
{

  const user = useSelector((state) => state.auth);
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;