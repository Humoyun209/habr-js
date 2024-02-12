import Tags from '../UI/Tags'

const HeaderDetail = ({ tags, level, created, isRemote, title, workload }) => {
    const skills = tags.map(tag => tag.name)

    const date = new Date(created)
    const monthNames = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ]
    const day = date.getDate()
    const monthIndex = date.getMonth()
    const year = date.getFullYear()

    const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`

    const formats = ['Бэкенд разработчик', level, workload, isRemote ? 'Можно удалённо' : '']
    return (
        <div className="p-4 bg-white flex flex-col gap-[20px]">
            <div className="flex justify-between items-center">
                <h4 className=" text-[24px] text-primary font-bold">{title} </h4>
                <span className="text-secondary text-[14px]">{formattedDate}</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-secondary">Требования </span>
                <Tags tags={skills} sep=", " />
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-secondary">Местоположение и тип занятости </span>
                <Tags tags={formats} sep=" • " />
            </div>
        </div>
    )
}

export default HeaderDetail
