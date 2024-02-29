import { useGetVacanciesQuery } from '../../feautures/vacancies/vacancy-actions'
import VacancyCard from './VacancyCard'

const VacanciesList = () => {
    const { data, isLoading } = useGetVacanciesQuery()

    return isLoading ? (
        <div>Loading...</div>
    ) : (
        data && (
            <div className="my-5 flex flex-col gap-5">
                {data.map(e => (
                    <VacancyCard
                        key={e.id}
                        vacancy={e}
                        companyLogo={e.company.logo}
                        companyName={e.company.name}
                    />
                ))}
            </div>
        )
    )
}

export default VacanciesList
