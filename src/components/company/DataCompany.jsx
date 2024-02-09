import Tags from '../UI/Tags'
import vacancyImg from '../../assets/vacancy.png'
import Button from '../UI/Button'
import { Link, useLocation, useNavigate } from 'react-router-dom'
// import useAuth from "../../hooks/use-auth"

const DataCompany = ({ data }) => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const tags = [
        'SQL',
        'Java',
        'PostgreSQL',
        'REST',
        'Git',
        'Java Spring Framework',
        'Docker',
        'Apache Kafka',
        'BPMN',
        'Hibernate',
        'JavaScript',
        'Linux',
        'UML',
        'React',
        'XML',
        'Spring Boot',
        'Kubernetes',
        'Python',
        'SOAP',
        'TypeScript',
        'Системный анализ',
        'Базы данных',
        'Высоконагруженные системы',
        'CSS',
        'RabbitMQ',
        'C++',
        'C#',
        '.NET',
        'Анализ требований',
        'HTML',
    ]

    return (
        <>
            <div className="bg-white py-4 px-6 flex-col flex gap-5">
                <div className="flex justify-between">
                    <span className="text-primary font-semibold">О компании</span>
                    {data.is_owner && (
                        <Link className="text-blue font-semibold">Редактировать</Link>
                    )}
                </div>
                <hr />
                <span
                    dangerouslySetInnerHTML={{ __html: data.company.about_company }}
                    className="text-secondary"
                ></span>
            </div>
            <div className="bg-white py-4 px-6 flex-col flex gap-5">
                <span className="text-primary font-semibold">
                    Вакансии компании «{data.company.name}»
                </span>
                <hr />
                <div className="p-10 flex flex-col gap-5 justify-center items-center">
                    <img src={vacancyImg} alt="" />
                    <span className=" text-primary fon-semibold">Нет вакансий</span>
                    <span className=" text-secondary">У компании нет открытых вакансий</span>
                    {data.is_owner && (
                        <Button
                            onClick={() =>
                                navigate('/vacancy/create', {
                                    state: { companyId: data.company.id },
                                })
                            }
                        >
                            Добавить новую вакансию
                        </Button>
                    )}
                </div>
            </div>
            <div className="bg-white py-4 px-6 flex-col flex gap-5">
                <span className="text-primary font-semibold">Востребованные в компании навыки</span>
                <hr />
                <Tags sep=" • " tags={tags} />
            </div>
        </>
    )
}

export default DataCompany
