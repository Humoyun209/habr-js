import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../hooks/use-auth'

const CheckResumeProvider = ({ children }) => {
    const { resume } = useAuth()
    const createPath = '/profile/personal/create'
    const editPath = '/profile/personal/edit'
    const location = useLocation()

    if (location.pathname === createPath && resume) {
        return <Navigate to={editPath} replace />
    } else if (location.pathname === editPath && !resume) {
        return <Navigate to={createPath} replace />
    }
    return children
}

export default CheckResumeProvider
