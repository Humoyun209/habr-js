import { Navigate } from "react-router-dom"
import useAuth from "../hooks/use-auth"

const RedirectProvider = ({children}) => {
    const { isAuth } = useAuth()
    if (isAuth) {
        return <Navigate to='/' replace />
    }
    return children
}

export default RedirectProvider