import defaultCompany from "../../assets/company-images/default-company.png"
import checkerImage from "../../assets/check.png"
import profileImage from "../../assets/my.jpg"

const SideBarCompany = () => {
    return (
        <div className="bg-white p-4 flex flex-col gap-10">
            <div className=" flex flex-col gap-8 justify-center items-center">
                <img width="150px" src={defaultCompany} alt="" />
                <span className=" flex justify-center items-center gap-1">
                    <p className="text-[18px] text-primary font-semibold">Яндекс</p>
                    <img width="16px" src={checkerImage} alt="" />
                </span>
                <p className=" text-secondary text-[14px] text-center">Международная компания, специализирующаяся на консалтинге, технологических услугах и аутсорсинге</p>
                <div className=" flex justify-center gap-2 items-center">
                    <button className="font-semibold text-[12px] px-4 py-2 bg-myGreen text-white rounded-[5px] border-none">Подписаться</button>
                    <button className="font-semibold text-[12px] px-4 py-2 border-[1px] border-blue text-blue rounded-[5px] hover:bg-blue hover:text-white">Хочу тут работать</button>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center ">
                    <span className="text-primary font-semibold">Вакансии</span>
                    <span className="text-blue font-semibold">245</span>
                </div>
                <hr />
                <div className="flex justify-between items-center ">
                    <span className="text-primary font-semibold">Сотрудники</span>
                    <span className="text-blue font-semibold">676 / 1174</span>
                </div>
                <hr />
                <div className="flex justify-between items-center ">
                    <span className="text-primary font-semibold">Подписчики</span>
                    <span className="text-blue font-semibold">533 / 1111</span>
                </div>
                <hr />
                <div className="flex flex-col flex-start gap-2">
                    <span className="text-primary font-semibold">Местоположение</span>
                    <span className="text-secondary text-[14px]">Беларусь, Минск, Беларусь, Минск, ул. Фабрициуса, д. 8б, корп. 1</span>
                </div>
                <hr />
                <div className="flex flex-col flex-start gap-2">
                    <span className="text-primary font-semibold">Контакты</span>
                    <span className="text-secondary text-[14px]">Телефон: +7 (909) 111-11-11</span>
                    <span className="text-secondary text-[14px]">Email: h.ahmedov209@gmail.com</span>
                </div>
                <hr />
                <div className="flex flex-col flex-start gap-2">
                    <span className="text-primary font-semibold">Ссылки</span>
                    <div>
                        <span className="text-secondary text-[14px]">Телеграм: </span><a href="https://t.me/humoyun209" className="text-blue text-[14px] font-semibold">@humoyun209</a>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col flex-start gap-2">
                    <span className="text-primary font-semibold">Контактные лица</span>
                    <div className=" flex items-center gap-5">
                        <img className="w-[36px] h-[36px] rounded-[50%]" src={profileImage} alt="" />
                        <div className=" flex flex-col items-start">
                            <span className="text-primary font-semibold">Ахмедова Хумоюн</span>
                            <span className="text-secondary text-[14px]">Lead HR manager/IT Recruiter</span>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SideBarCompany