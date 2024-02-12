import { Link } from 'react-router-dom'
import check from '../../assets/check.png'

const CompanyAbout = ({ logo, vacancies, url, title }) => {
    const companyLogo = `http://127.0.0.1:8000/${logo}`
    return (
        <div className="bg-white flex px-10 flex-col gap-10 pt-[100px] pb-4">
            <div className=" flex flex-col items-center gap-2">
                <img className="rounded-[10px] h-[150px]" width="150px" src={companyLogo} alt="" />
                <div className="flex gap-1 items-center">
                    <Link className="text-[18px] font-bold hover:underline" to="company/2">
                        {title}
                    </Link>
                    <img className="" width={'20px'} src={check} alt="" />
                </div>
                <span className="text-[#a8a8a8] text-[14px] text-center">
                    Создавать передовые технологии — это наше призвание
                </span>
                <Link className="text-[#2c73dd] font-semibold text-[14px] hover:underline" to={url}>
                    {url}
                </Link>
            </div>
            <hr />
            <div className=" flex flex-col gap-5 justify-center">
                {vacancies.map(vacancy => (
                    <>
                        <div className="flex gap-4 items-start ">
                            <img
                                className=" rounded-[5px] h-[40px]"
                                src={companyLogo}
                                width={'40px'}
                            />
                            <div className="flex flex-col">
                                <Link className="text-[#464646] font-semibold hover:underline">
                                    {vacancy.title}
                                </Link>
                                <Link className="text-[14px] text-[#a8a8a8] hover:underline">
                                    Санкт-Петербург
                                </Link>
                            </div>
                        </div>
                        <hr />
                    </>
                ))}

                <Link
                    to={'company/2/all_vacancies'}
                    className=" text-[16px] text-center text-[#a8a8a8] font-semibold hover:underline"
                >
                    Все вакансии (64)
                </Link>
            </div>
        </div>
    )
}

export default CompanyAbout
