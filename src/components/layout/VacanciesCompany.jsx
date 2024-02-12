import astro from '../../assets/company-images/astro.png'
import bank from '../../assets/company-images/bank.jpg'
import bell from '../../assets/company-images/bell.jpg'
import tinkoff from '../../assets/company-images/tinkoff.png'
import vk from '../../assets/company-images/vk.png'
import { Link } from 'react-router-dom'

const VacanciesCompany = () => {
    const images = [astro, bank, bell, tinkoff, vk]
    return (
        <div className="py-4 px-6 bg-white flex flex-col gap-7 ">
            <span className="font-semibold text-[18px] text-primary">Вакансии компаний</span>
            {images.map((elem, index) => (
                <div key={index} className="flex justify-start gap-3">
                    <Link to="/company/1">
                        <img width="58px" src={elem} alt="" />
                    </Link>
                    <div className="flex items-center flex-col gap-1">
                        <span className="text-primary font-semibold text-[18px]">
                            Bell Integrator
                        </span>
                        <span className="text-secondary text-[16px]">Вакансии: 245</span>
                    </div>
                </div>
            ))}
            <hr />
            <Link
                to="/"
                className="text-center font-semibold text-[18px] text-secondary hover:underline"
            >
                Все компании
            </Link>
        </div>
    )
}

export default VacanciesCompany
