import { Controller, useForm } from 'react-hook-form'
import Input from '../components/UI/Input'
import ErrorMessage from '../components/UI/ErrorMessage'
import Select from 'react-select'
import { useGetCitiesQuery } from '../feautures/create-company/actions'

const CreateVacancyPage = () => {
    const { handleSubmit, control } = useForm({ mode: 'onBlur' })

    const levels = [
        { value: 0, label: 'Стажер (Intern)' },
        { value: 1, label: 'Младший (Junior)' },
        { value: 2, label: 'Средний (Middle)' },
        { value: 3, label: 'Старший (Senior)' },
        { value: 4, label: 'Ведущий (Lead)' },
    ]

    const skillsArray = [
        { value: 0, label: 'Git' },
        { value: 1, label: 'JavaScript' },
        { value: 2, label: 'SQL' },
        { value: 3, label: 'HTML' },
        { value: 4, label: 'Python' },
        { value: 5, label: 'CSS' },
        { value: 6, label: 'PostgreSQL' },
        { value: 7, label: 'Linux' },
        { value: 8, label: 'ООП' },
        { value: 9, label: 'Управление проектами' },
        { value: 10, label: 'React' },
        { value: 11, label: 'MySQL' },
        { value: 12, label: 'Docker' },
        { value: 13, label: 'Java' },
        { value: 14, label: 'Английский язык' },
        { value: 15, label: 'PHP' },
        { value: 16, label: 'Управление людьми' },
        { value: 17, label: 'TypeScript' },
        { value: 18, label: 'Адаптивная верстка' },
        { value: 19, label: 'C#' },
        { value: 20, label: 'Node.js' },
        { value: 21, label: 'Adobe Photoshop' },
        { value: 22, label: 'Веб-разработка' },
        { value: 23, label: 'Подбор специалистов' },
        { value: 24, label: 'Ведение переговоров' },
    ]

    return (
        <div className=" grid grid-cols-12 gap-5 max-w-[1200px] mx-auto my-5">
            <div className=" col-span-3"></div>
            <form
                className=" col-span-9 flex flex-col gap-5"
                method="POST"
                onSubmit={handleSubmit(data => {
                    console.log(data)
                })}
            >
                <div className=" bg-white py-5 px-10 flex flex-col gap-4">
                    <h1 className=" text-primary text-[32px] leading-[28px] font-bold">
                        Новая вакансия
                    </h1>
                    <h5 className=" text-primary font-semibold">Название вакансии *</h5>
                    <p className=" text-secondary text-[14px]">
                        Дайте вакансии простое и понятное название, чтобы соискатели смогли легко
                        найти ее в поиске (например «JavaScript разработчик»). Не пишите в этом поле
                        место работы, навыки, график, бонусы и всё остальное, что не относится к
                        названию позиции.
                    </p>
                    <Controller
                        name="name"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <>
                                <Input {...field} />
                                {error?.type === 'required' && <ErrorMessage />}
                            </>
                        )}
                    />
                </div>
                <div className="bg-white py-5 px-10 flex flex-col gap-16">
                    <div className="flex flex-col gap-4">
                        <h5 className=" text-primary font-semibold">Требуемая квалификация *</h5>
                        <p className=" text-secondary text-[14px]">
                            Выберите профессиональный уровень будущего сотрудника. Кстати, для
                            стажерских вакансий действует скидка 80% на все услуги, включая
                            размещение. О том, что такое квалификация и чем джун отличается от
                            сеньора, можно почитать в разделе хелпа «Специализации и квалификации».
                        </p>
                        <Controller
                            name="qualification"
                            control={control}
                            rules={{}}
                            render={({ field, fieldState: { error } }) => (
                                <Select
                                    {...field}
                                    options={levels}
                                    classNamePrefix="city-select"
                                    placeholder="Выберите квалификацию..."
                                    isSearchable
                                />
                            )}
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h5 className=" text-primary font-semibold">
                            Требуемые профессиональные навыки *
                        </h5>
                        <p className=" text-secondary text-[14px]">
                            Укажите от одного до десяти навыков, которыми должен обладать
                            соискатель. Расставьте их в порядке важности. Чем подробнее вы опишете
                            стек, тем быстрее найдёте нужного специалиста.
                        </p>
                        <Controller
                            name="tags"
                            control={control}
                            rules={{}}
                            render={({ field, fieldState: { error } }) => (
                                <Select
                                    {...field}
                                    options={skillsArray}
                                    classNamePrefix="city-select"
                                    placeholder="Выберите квалификацию..."
                                    isSearchable
                                    isMulti
                                />
                            )}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateVacancyPage
