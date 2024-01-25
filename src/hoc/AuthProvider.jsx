import { Navigate } from "react-router-dom"

const AuthProvider = ({children}) => {
    const isAuth = false

    if (!isAuth) {
        return <Navigate to='/login' replace />
    }
    return children
}

export default AuthProvider