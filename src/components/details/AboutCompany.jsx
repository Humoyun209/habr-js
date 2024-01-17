import { Link } from "react-router-dom"
import companyImage from "../../company-images/company2.png"
import check from '../../assets/check.png'

const CompanyAbout = () => {
    return (
        <div className="bg-white flex px-10 flex-col gap-10 pt-[100px] pb-4">
            <div className=" flex flex-col items-center gap-2">
                <img className="rounded-[10px]" width="150px" src={companyImage} alt="" />
                <div className="flex gap-1 items-center">
                    <Link className="text-[18px] font-bold hover:underline" to="company/2">YADRO</Link>
                    <img className="" width={'20px'} src={check} alt="" />
                </div>
                <span className="text-[#a8a8a8] text-[14px] text-center">Создавать передовые технологии — это наше призвание</span>
                <Link className="text-[#2c73dd] font-semibold text-[14px] hover:underline" to="https://yadro.com">yadro.com</Link>
            </div>
            <hr />
            <div className=" flex flex-col gap-5 justify-center">
                <div className="flex gap-4 items-start">
                    <img className=" rounded-[5px]" src={companyImage} width={'40px'} alt="" />
                    <div className="flex flex-col">
                        <Link className="text-[#464646] font-semibold hover:underline">C++ engineer (Telecom)</Link>
                        <Link className="text-[14px] text-[#a8a8a8] hover:underline">Санкт-Петербург</Link>
                    </div>
                </div>
                <hr />
                <div className="flex gap-4 items-start">
                    <img className=" rounded-[5px]" src={companyImage} width={'40px'} alt="" />
                    <div className="flex flex-col">
                        <Link className="text-[#464646] font-semibold hover:underline">Senior QA Engineer / Старший инженер по тестированию (TATLIN.UNIFIED)</Link>
                        <Link className="text-[14px] text-[#a8a8a8] hover:underline">Санкт-Петербург</Link>
                    </div>
                </div>
                <hr />
                
                <div className="flex gap-4 items-start">
                    <img className=" rounded-[5px]" src={companyImage} width={'40px'} alt="" />
                    <div className="flex flex-col items-start">
                        <Link className="text-[#464646] font-semibold hover:underline">C++ engineer (Telecom)</Link>
                        <Link className="text-[14px] text-[#a8a8a8] hover:underline">Санкт-Петербург</Link>
                    </div>
                </div>
                <hr />
                <Link to={'company/2/all_vacancies'} className=" text-[16px] text-center text-[#a8a8a8] font-semibold hover:underline">Все вакансии (64)</Link>
            </div>
        </div>
        
    )
}


export default CompanyAbout