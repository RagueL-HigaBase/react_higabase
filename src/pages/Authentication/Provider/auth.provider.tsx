import { createContext, useContext, useEffect } from "react";
// import { buildApiProtocol } from "../store/comunication/api";
// import { ApiCallRegulations } from "../store/regulation/regulation";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext)

export  function AuthProvider() {
    useEffect(() => {
        const cred = async () => {
    
        }
        
    }, [])

    return (
        <>
        </>
    )
}