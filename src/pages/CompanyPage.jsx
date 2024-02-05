import CreateBanner from "../components/company/CreateBanner"
import DataCompany from "../components/company/DataCompany"
import SideBarCompany from "../components/company/SideBarCompany"

const CompanyPage = () => {
    return (
        <div className=" my-5 grid grid-cols-12 gap-5 max-w-[1200px] mx-auto">
            <div className="col-span-4">
                <SideBarCompany />
            </div>
            <div className="col-span-8 flex flex-col gap-5">
                <CreateBanner />
                <DataCompany />
            </div>
        </div>
    )
}

export default CompanyPage