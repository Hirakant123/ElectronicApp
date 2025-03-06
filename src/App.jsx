import {Routes, Route} from "react-router-dom"
import { Home } from "./pages/Home"
import { Signup } from "./components/Signup"
import { Login } from "./components/Login"
import { Dashboard } from "./components/Dashboard";
import "./App.css";

function App() {


  return (
    <>
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
     </Routes>

     </>
   
  )
}

export default App
