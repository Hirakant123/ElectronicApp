import { useState } from "react"
import "../App.css";

export const Signup = () => {

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleRegister = async () => {
        let request = await fetch("http://localhost:8080/users/register", {

            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name, username, email, pass })
        })
        // const response = await response.json();
        const response = await request.json();

        alert(response.msg)
        setName("")
        setUsername("")
        setEmail("")
        setPass("")
    }

    return (
        <>


            <img src="whirlpool.logo.png" height="50px" width="150px" alt="whirlpool-logo" className="logo" ></img>

            {/* <h1>Please Register here to continue</h1> */}

            <div className="myClass">

                <h1>Sign in</h1>
                <h3>Email or name and password</h3>

                <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} value={name} />
                <input type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} value={username} />
                <input type="text" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <input type="password" placeholder="Enter your password" onChange={(e) => setPass(e.target.value)} value={pass} />
                <button onClick={handleRegister} className="btn">Register</button>

                <ul>
                    <li>Need help?</li>
                </ul>

                <span className="devider"></span>
                <h3>Buying for work?</h3>
                <p>Shop on Whirlpool Business</p>
            </div>
        </>
    )
}