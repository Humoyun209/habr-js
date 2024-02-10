import { useParams, Navigate } from 'react-router-dom'
import useAuth from '../hooks/use-auth'
import { useCheckIsOwnerQuery } from '../feautures/create-company/actions'

const CompanyOwnerProvider = ({ children }) => {
    const { access_token } = useAuth()
    const { companyId } = useParams()

    if (!access_token) {
        return <Navigate to="/login" />
    }

    const { data, isLoading } = useCheckIsOwnerQuery({ access_token, companyId })
    return isLoading ? (
        <div>Loading....</div>
    ) : data && data.is_owner ? (
        children
    ) : (
        <Navigate to="/" replace />
    )
}

export default CompanyOwnerProvider
