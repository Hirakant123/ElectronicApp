

import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [isLoggedIn, setIsLoggedIn] = useState(()=>{
        // if(localStorage.getItem("accessToken")){
        //     return true
        // }
        // return false

        return !!localStorage.getItem("accessToken") // this is a shortcut term

        //!! ==> Convert to Boolean
        // if the token is present inside the localSaorage return true otherwise return false
    });

    const login = () => {
        setIsLoggedIn(true)
    }

    const logout = () => {
        setIsLoggedIn(false)
        localStorage.removeItem("accessToken")
    }

    return (
        <> 
          <AuthContext.Provider value={{isLoggedIn, login, logout}}>
             {children}
          </AuthContext.Provider>
        </>
    )
}