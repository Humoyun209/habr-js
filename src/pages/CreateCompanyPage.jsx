import CreateDataCompany from "../components/create-company/CreateDataCompany"
import CreateLogo from "../components/create-company/CreateLogo"
import VacanciesCompany from "../components/layout/VacanciesCompany"

const CreateCompanyPage = () => {
    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 my-5 gap-5">
            <div className=" col-span-8">
                <CreateLogo />
                <CreateDataCompany />
            </div>
            <div className="col-span-4">
                <VacanciesCompany />
            </div>
        </div>
    )
}

export default CreateCompanyPage