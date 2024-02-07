import Tags from '../UI/Tags'

const HeaderDetail = () => {
    const tags = [
        'Git',
        'SQL',
        'PostgreSQL',
        'Python',
        'Linux',
        'Docker',
        'ООП',
        'Django',
        'FastAPI',
    ]

    const formats = [
        'Бэкенд разработчик',
        'Старший (Senior)',
        'Санкт-Петербург',
        'Минск',
        'Нижний Новгород',
        'Можно удалённо',
        'Полный рабочий день',
    ]
    return (
        <div className="p-4 bg-white flex flex-col gap-[20px]">
            <div className="flex justify-between items-center">
                <h4 className=" text-[24px] text-primary font-bold">Python Techlead </h4>
                <span className="text-secondary text-[14px]">18 декабря 2023</span>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-secondary">Требования </span>
                <Tags tags={tags} sep=", " />
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-secondary">Местоположение и тип занятости </span>
                <Tags tags={tags} sep=" • " />
            </div>
        </div>
    )
}

export default HeaderDetail
