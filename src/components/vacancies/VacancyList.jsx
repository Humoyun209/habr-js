import VacancyCard from "./VacancyCard"


const VacanciesList = () => {
    const vacansies = [0, 1, 2]
    return (
        <div className="my-5 flex flex-col gap-5">
            {  vacansies.map(e => (
                <VacancyCard key={e} />
            )) }
        </div>
    )
}

export default VacanciesList