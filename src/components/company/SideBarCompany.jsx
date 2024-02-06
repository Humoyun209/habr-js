import defaultCompany from "../../assets/company-images/default-company.png"
import checkerImage from "../../assets/check.png"
import profileImage from "../../assets/my.jpg"

const SideBarCompany = ({data}) => {
    const logoUrl = `http://127.0.0.1:8000/${data.photo}`
    return (
        <div className="bg-white p-4 flex flex-col gap-10">
            <div className=" flex flex-col gap-8 justify-center items-center">
                <img width="150px" src={logoUrl || defaultCompany} alt="" />
                <span className=" flex justify-center items-center gap-1">
                    <p className="text-[18px] text-primary font-semibold">{data.name}</p>
                    <img width="16px" src={checkerImage} alt="" />
                </span>
                <p className=" text-secondary text-[14px] text-center">Международная компания, специализирующаяся на консалтинге, технологических услугах и аутсорсинге</p>
                <div className=" flex justify-center gap-2 items-center">
                    <button className="font-semibold text-[12px] px-4 py-2 bg-myGreen text-white rounded-[5px] border-none hover:bg-[#466d1d] transition duration-500 ease-in-out">Подписаться</button>
                    <button className="font-semibold text-[12px] px-4 py-2 border-[1px] border-blue text-blue rounded-[5px] transition-all duration-500 ease-in-out hover:bg-blue hover:text-white">Хочу тут работать</button>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center ">
                    <span className="text-primary font-semibold">Вакансии</span>
                    <span className="text-blue font-semibold">{data.vacancies.length}</span>
                </div>
                <hr />
                <div className="flex justify-between items-center ">
                    <span className="text-primary font-semibold">Сотрудники</span>
                    <span className="text-blue font-semibold">676 / 1174</span>
                </div>
                <hr />
                <div className="flex justify-between items-center ">
                    <span className="text-primary font-semibold">Подписчики</span>
                    <span className="text-blue font-semibold">{data.followers.length}</span>
                </div>
                <hr />
                <div className="flex flex-col flex-start gap-2">
                    <span className="text-primary font-semibold">Местоположение</span>
                    <span className="text-secondary text-[14px]">Беларусь, Минск, Беларусь, Минск, ул. Фабрициуса, д. 8б, корп. 1</span>
                </div>
                <hr />
                <div className="flex flex-col flex-start gap-2">
                    <span className="text-primary font-semibold">Контакты</span>
                    <span className="text-secondary text-[14px]">Телефон: {data.phone}</span>
                    <span className="text-secondary text-[14px]">Email: {data.email}</span>
                </div>
                <hr />
                <div className="flex flex-col flex-start gap-2">
                    <span className="text-primary font-semibold">Ссылки</span>
                    <div>
                        <span className="text-secondary text-[14px]">Телеграм: </span><a href={data.url} className="text-blue text-[14px] font-semibold">{data.url}</a>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col flex-start gap-2">
                    <span className="text-primary font-semibold">Контактные лица</span>
                    <div className=" flex items-center gap-5">
                        <img className="w-[36px] h-[36px] rounded-[50%]" src={profileImage} alt="" />
                        <div className=" flex flex-col items-start">
                            <span className="text-primary font-semibold">{data.owner.username}</span>
                            <span className="text-secondary text-[14px]">{data.owner.email}</span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SideBarCompany