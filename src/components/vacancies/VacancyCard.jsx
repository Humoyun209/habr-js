import companyImage from '../../assets/company-images/company1.jpg'
import fillFavorite from '../../assets/favorite-fill.png'
import nullFavorite from '../../assets/favorite-null.png'
import checkMark from '../../assets/check.png'
import { useState } from 'react'
import Tags from '../UI/Tags'
import { Link } from 'react-router-dom'

const VacancyCard = ({ vacancy, companyName, companyLogo }) => {
    const tags = vacancy.tags.map(tag => tag.name)

    const formats = ['Бэкенд разработчик', vacancy.level, vacancy.workload]
    if (vacancy.is_remote) {
        formats.push('Можно удаленно')
    }

    const [favorite, setFavorite] = useState(nullFavorite)
    return (
        <div className="flex gap-5 bg-white py-5 px-3 text-[#464646]">
            <div className="flex flex-col justify-between ">
                <img
                    className=" max-w-none w-[50px] h-[50px] rounded-[5px]"
                    src={companyLogo ? `http://127.0.0.1:8000/${companyLogo}` : companyImage}
                    alt=""
                />
                <span></span>
            </div>
            <div className=" flex flex-col gap-1">
                <div className=" flex gap-1 items-center">
                    <a className=" hover:underline text-[14px]" href="#">
                        {companyName}
                    </a>
                    <span>
                        <img width={'20px'} src={checkMark} alt="" />
                    </span>
                </div>
                <Link to="vacancy/1" className="hover:underline text-[20px] font-bold">
                    {vacancy.title}
                </Link>
                <div>
                    <Tags tags={formats} sep=", " />
                </div>
                <div className="text-[#68c07b] font-semibold">
                    от {vacancy.min_salary} ₽ до {vacancy.max_salary} ₽
                </div>
                <div className="mt-2">
                    <Tags tags={tags} sep=" • " />
                </div>
            </div>
            <div className="flex flex-col justify-between">
                <span className="text-[#999999] w-max">25 декабря 2023</span>
                <img
                    onClick={() =>
                        setFavorite(fav => (fav === nullFavorite ? fillFavorite : nullFavorite))
                    }
                    className=" ml-auto cursor-pointer"
                    width={'28px'}
                    src={favorite}
                    alt=""
                />
            </div>
        </div>
    )
}

export default VacancyCard
