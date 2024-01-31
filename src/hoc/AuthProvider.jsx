import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../hooks/use-auth"

const AuthProvider = ({children}) => {
    const {isAuth} = useAuth()
    const location = useLocation()

    if (!isAuth) {
        return <Navigate to='/login' replace state={{path: location.pathname}} />
    }
    return children
}

export default AuthProvider