import { useSelector } from 'react-redux'

const useAuth = () => {
    const { access_token, isAuth, error, user, resume } = useSelector(state => state.auth)
    return {
        access_token,
        isAuth,
        errorMessage: error,
        resume,
        user,
    }
}

export default useAuth
