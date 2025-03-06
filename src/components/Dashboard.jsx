

import { AuthContext } from "../assets/AuthContext"
import { useContext } from "react"

export const Dashboard = () => {

    const { logout } = useContext(AuthContext)
    return (

        <>
            <iframe
                src="/index.html"
                style={{
                    width: "100vw",
                    height: "100vh",
                    border: "none"
                }}
                title="Full-Screen HTML"
            />

            <button onClick={logout} className="logout">Logout</button>
        </>
    )
}
