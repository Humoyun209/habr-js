import profileImg from '../../assets/my.jpg'
import { Link } from 'react-router-dom'

const ResumeBar = () => {
    return (
        <div className="flex flex-col mt-5 gap-5">
            <div className=" flex justify-start items-center gap-5 px-4 py-2 bg-white">
                <img className="w-[50px] rounded-[50%]" src={profileImg} alt="" />
                <div className=" flex flex-col">
                    <Link className=" text-primary font-semibold">Humoyun Ahmedov</Link>
                    <Link className="text-secondary text-[14px]">humoyun209</Link>
                </div>
            </div>
            <div className="bg-white flex flex-col">
                <Link
                    to="/profile/personal"
                    className="px-8 py-4 font-semibold text-[14px] bg-blue text-white"
                >
                    Личная информация
                </Link>
                <Link className="px-8 py-4 font-semibold text-secondary hover:text-primary hover:bg-cardBg text-[14px]">
                    Избранные вакансии
                </Link>
                <Link className="px-8 py-4 font-semibold text-secondary hover:text-primary hover:bg-cardBg text-[14px]">
                    Отклики на вакансии
                </Link>
                <Link className="px-8 py-4 font-semibold text-secondary hover:text-primary hover:bg-cardBg text-[14px]">
                    Подписка на вакансии
                </Link>
                <Link className="px-8 py-4 font-semibold text-secondary hover:text-primary hover:bg-cardBg text-[14px]">
                    Уведомления
                </Link>
            </div>
        </div>
    )
}

export default ResumeBar
