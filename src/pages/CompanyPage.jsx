import { useLocation, useParams } from 'react-router-dom'
import CreateBanner from '../components/company/CreateBanner'
import DataCompany from '../components/company/DataCompany'
import SideBarCompany from '../components/company/SideBarCompany'
import { useGetCompanyQuery } from '../feautures/company/actions'
import useAuth from '../hooks/use-auth'

const CompanyPage = () => {
    const { companyId } = useParams()
    const location = useLocation()
    const { access_token } = useAuth()
    const { data, isLoading } = useGetCompanyQuery({ companyId, access_token })
    console.log(location)
    return isLoading ? (
        <h1>Loading...</h1>
    ) : (
        data && (
            <div className=" my-5 grid grid-cols-12 gap-5 max-w-[1200px] mx-auto">
                <div className="col-span-4">
                    <SideBarCompany data={data} />
                </div>
                <div className="col-span-8 flex flex-col gap-5">
                    {data.is_owner && <CreateBanner />}
                    <DataCompany data={data} />
                </div>
            </div>
        )
    )
}

export default CompanyPage
