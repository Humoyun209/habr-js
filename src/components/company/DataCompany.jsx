import Tags from "../UI/Tags"
import vacancyImg from "../../assets/vacancy.png"
import Button from "../UI/Button"
import { Link } from "react-router-dom"

const DataCompany = () => {

    const tags = [
            "SQL",
            "Java",
            "PostgreSQL",
            "REST",
            "Git",
            "Java Spring Framework",
            "Docker",
            "Apache Kafka",
            "BPMN",
            "Hibernate",
            "JavaScript",
            "Linux",
            "UML",
            "React",
            "XML",
            "Spring Boot",
            "Kubernetes",
            "Python",
            "SOAP",
            "TypeScript",
            "Системный анализ",
            "Базы данных",
            "Высоконагруженные системы",
            "CSS",
            "RabbitMQ",
            "C++",
            "C#",
            ".NET",
            "Анализ требований",
            "HTML"
        ]
    
    return (
        <>
            <div className="bg-white py-4 px-6 flex-col flex gap-5">
                <div className="flex justify-between">
                    <span className="text-primary font-semibold">О компании</span>
                    <Link className="text-blue font-semibold">Редактировать</Link>
                </div><hr />
                <span className="text-secondary text-[20px] font-semibold">Нет данные о компании</span>
            </div>
            <div className="bg-white py-4 px-6 flex-col flex gap-5">
                <span className="text-primary font-semibold">Вакансии компании «Bell Integrator»</span><hr />
                <div className="p-10 flex flex-col gap-5 justify-center items-center">
                    <img src={vacancyImg} alt="" />
                    <span className=" text-primary fon-semibold">Нет вакансий</span>
                    <span className=" text-secondary">У компании нет открытых вакансий</span>
                    <Button>Добавить новую вакансию</Button>
                </div>
            </div>
            <div className="bg-white py-4 px-6 flex-col flex gap-5">
                <span className="text-primary font-semibold">Востребованные в компании навыки</span><hr />
                <Tags sep=" • " tags={tags} />
            </div>
        </>
    )
}

export default DataCompany