import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/use-auth'

const CheckResumeProvider = ({ children }) => {
    const { resume, isAuth } = useAuth()
    const createPath = '/profile/personal/create'
    const location = useLocation()
    if (!resume && isAuth) {
        return <Navigate to={createPath} replace />
    } else if (isAuth && resume && location.pathname === createPath) {
        return <Navigate to="/profile/personal/edit" replace />
    }
    return children
}

export default CheckResumeProvider
