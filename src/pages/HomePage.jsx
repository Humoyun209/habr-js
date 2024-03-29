import Pagination from '../components/vacancies/Pagination'
import AllFilters from '../components/filters/AllFilters'
import MainFilter from '../components/filters/MainFilter'
import VacanciesList from '../components/vacancies/VacancyList'
import VacanciesCompany from '../components/layout/VacanciesCompany'

function HomePage() {
    return (
        <div className=" max-w-[1200px] mx-auto grid grid-cols-12 gap-5 my-5">
            <div className="col-span-8">
                <MainFilter />
                <VacanciesList />
                <Pagination />
            </div>
            <div className="col-span-4">
                <AllFilters />
                <div className="mt-5">
                    <VacanciesCompany />
                </div>
            </div>
        </div>
    )
}

export default HomePage
