import SideBarCompany from "../components/company/SideBarCompany"

const CompanyPage = () => {
    return (
        <div className=" my-5 grid grid-cols-12 gap-5 max-w-[1200px] mx-auto">
            <div className="col-span-4">
                <SideBarCompany />
            </div>
            <div className="col-span-8">

            </div>
        </div>
    )
}

export default CompanyPage