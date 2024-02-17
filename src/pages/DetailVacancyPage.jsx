import { useParams } from 'react-router-dom'
import CompanyAbout from '../components/details/AboutCompany'
import AboutVacancy from '../components/details/AboutVacancy'
import HeaderDetail from '../components/details/HeaderDetail'
import ResponseSection from '../components/details/ResponseSection'
import { useGetVacancyQuery } from '../feautures/vacancies/actions'

const DetailVacancyPage = () => {
    const { vacancyId } = useParams()
    const { data, isLoading } = useGetVacancyQuery({ vacancyId })
    console.log(data)
    return isLoading ? (
        <div>Loading...</div>
    ) : (
        data && (
            <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-5 my-5">
                <div className="col-span-8">
                    <HeaderDetail
                        tags={data.vacancy.tags}
                        level={data.vacancy.level}
                        created={data.vacancy.created}
                        isRemote={data.vacancy.is_remote}
                        title={data.vacancy.title}
                        workload={data.vacancy.workload}
                    />
                    <AboutVacancy
                        bonuses={data.vacancy.bonuses}
                        expectation={data.vacancy.expectation}
                        conditions={data.vacancy.conditions}
                        about={data.company.about_company}
                    />
                    <ResponseSection companyId={data.company.id} vacancyId={data.vacancy.id} />
                </div>
                <div className="col-span-4">
                    <CompanyAbout
                        logo={data.company.logo}
                        vacancies={data.company.vacancies}
                        url={data.company.url}
                        title={data.company.name}
                        companyId={data.company.id}
                    />
                </div>
            </div>
        )
    )
}

export default DetailVacancyPage
