import { Signup } from "../components/Signup"
import { Link } from "react-router-dom"
import { Dashboard } from "../components/Dashboard"
import { AuthContext } from "../assets/AuthContext"
import { useContext } from "react"
import "../App.css";


export const Home = () => {

    const {isLoggedIn} = useContext(AuthContext)
    
    return (
        <>
          
       
         {isLoggedIn ? <Dashboard/> : (
            <> 
               <Signup/>
               <Link to={"/login"} className="link">Already have an account? Please login</Link>
            </>
          )}
      
            
        </>
    )
}

