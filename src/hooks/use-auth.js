import { useSelector } from "react-redux"

const useAuth = () => {
    const { access_token, isAuth, error, user } = useSelector(state => state.auth)
    return {
        access_token,
        isAuth,
        errorMessage: error,
        user
    }
}

export default useAuth