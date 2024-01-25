import { useSelector } from "react-redux"

const useAuth = () => {
    const { access_token, isAuth, error } = useSelector(state => state.auth)
    return {
        access_token,
        isAuth,
        errorMessage: error 
    }
}

export default useAuth