import CompanyAbout from "../components/details/AboutCompany"
import AboutVacancy from "../components/details/AboutVacancy"
import HeaderDetail from "../components/details/HeaderDetail"
import ResponseSection from "../components/details/ResponseSection"
import DropDown from "../components/layout/DropDown"

const DetailVacancyPage = () => {
    return (
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-5 my-5">
            <div className="col-span-8">
                <HeaderDetail />
                <AboutVacancy />
                <ResponseSection />
            </div>
            <div className="col-span-4">
                <CompanyAbout />
            </div>
        </div>
    )
}

export default DetailVacancyPage