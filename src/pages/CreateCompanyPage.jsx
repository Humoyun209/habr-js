import CreateDataCompany from "../components/create-company/CreateDataCompany"
import CreateLogo from "../components/create-company/CreateLogo"
import VacanciesCompany from "../components/layout/VacanciesCompany"

const CreateCompanyPage = () => {
    const handleCreateCompany = (event) => {
        event.preventDefault()
    }
    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 my-5 gap-5">
            <form className=" col-span-8" method="post" name="createCompany" onSubmit={handleCreateCompany}>
                <CreateLogo />
                <CreateDataCompany />
            </form>
            <div className="col-span-4">
                <VacanciesCompany />
            </div>
        </div>
    )
}

export default CreateCompanyPage