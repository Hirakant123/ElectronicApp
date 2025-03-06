
import { useContext, useState } from "react"
import { AuthContext } from "../assets/AuthContext"
import { useNavigate } from "react-router-dom"
import "../App.css";

export const Login = () => {

    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleLogin = async () => {
        let request = await fetch("http://localhost:8080/users/login", {

            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ username, pass })
        })
        // const response = await response.json();
        const response = await request.json();

        alert(response.msg)
        console.log(response)
        if (response.token) {
            localStorage.setItem("accessToken", response.token)
            login()
            navigate("/")
        }
        setUsername("")
        setPass("")
    }

    return (
        <>

            <h1 className="login-title">Already have an account? Please Login</h1>

            <div className="login-page">

              <h1>Login</h1> 

                <input type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} value={username} />
                <input type="password" placeholder="Enter your password" onChange={(e) => setPass(e.target.value)} value={pass} />

                <button onClick={handleLogin} className="btn">Login</button>
            </div>

        </>
    )
}