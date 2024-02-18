import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/use-auth'

const CheckResumeProvider = ({ children }) => {
    const { resume, isAuth } = useAuth()
    if (!resume && isAuth) {
        return <Navigate to="/profile/personal/create" replace />
    }
    return children
}

export default CheckResumeProvider
