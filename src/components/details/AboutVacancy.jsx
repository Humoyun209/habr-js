import nullFavorite from '../../assets/favorite-null.png'

import vk from '../../assets/vk.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'

const AboutVacancy = ({ bonuses, expectation, conditions, about }) => {
    return (
        <div className="mt-5 bg-white p-4 flex flex-col gap-[10px] text-primary">
            <span className="my-2 text-[16px]  font-semibold">Описание вакансии</span>
            <hr />
            <span className="my-2 text-[16px] font-semibold">О компании и команде</span>
            <p dangerouslySetInnerHTML={{ __html: about }}></p>
            <span className="my-2 text-[16px] font-semibold">Обязанности:</span>
            <p dangerouslySetInnerHTML={{ __html: conditions }}></p>
            <span className="my-2 text-[16px] font-semibold">Ожидания от кандидата:</span>
            <p dangerouslySetInnerHTML={{ __html: expectation }}></p>
            <span className="my-2 text-[16px] font-semibold">Условия работы:</span>
            <p dangerouslySetInnerHTML={{ __html: bonuses }}></p>
            <hr />
            <div className="mt-5 flex justify-between">
                <div className="flex gap-1">
                    <span className="">Поделиться: </span>
                    <a href="#">
                        <img width={'27px'} src={twitter} alt="" />
                    </a>
                    <a href="#">
                        <img width={'27px'} src={vk} alt="" />
                    </a>
                    <a href="#">
                        <img width={'27px'} src={facebook} alt="" />
                    </a>
                </div>
                <img width={'27px'} src={nullFavorite} alt="" />
            </div>
        </div>
    )
}

export default AboutVacancy
