import { Controller, useForm } from 'react-hook-form'
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'
import ErrorMessage from '../components/UI/ErrorMessage'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import '../styles/custom-select.scss'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react'

const CreateVacancyPage = () => {
    const { handleSubmit, control, reset } = useForm({ mode: 'onBlur' })
    const animatedComponent = makeAnimated()

    const [condition, setCondition] = useState('')
    const [bonuse, setBonuse] = useState('')
    const [expections, setExpections] = useState('')

    const baseCKEChange = (editorData, setState) => {
        const data = editorData.getData()
        setState(data)
    }

    console.log(bonuse)

    const workloads = [
        { value: 0, label: 'Полный рабочий день' },
        { value: 1, label: 'Неполный рабочий день' },
    ]

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
            <div className=" col-span-3">{/* <SideBarCompany /> */}</div>
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
                    <h5 className=" text-primary font-bold">Название вакансии *</h5>
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
                                <Input placeholder="Название вакансии..." {...field} />
                                {error?.type === 'required' && <ErrorMessage />}
                            </>
                        )}
                    />
                </div>
                <div className="bg-white py-5 px-10 flex flex-col gap-16">
                    <div className="flex flex-col gap-4">
                        <h5 className=" text-primary font-bold">Требуемая квалификация *</h5>
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
                                    classNamePrefix="custom-select"
                                    placeholder="Выберите квалификацию..."
                                    isSearchable
                                    components={animatedComponent}
                                />
                            )}
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h5 className=" text-primary font-bold">
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
                                    classNamePrefix="custom-select"
                                    placeholder="Выберите навыки..."
                                    isSearchable
                                    isMulti
                                    components={animatedComponent}
                                />
                            )}
                        />
                    </div>
                </div>

                <div id="conditions" className="bg-white py-5 px-10 flex flex-col gap-16">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[21px] leading-[17px] text-primary font-bold mb-5">
                            Условия
                        </h2>
                        <h4 className=" text-primary font-bold">Заработная плата</h4>
                        <p className=" text-secondary text-[14px]">
                            Обратите внимание, наличие зарплаты в вакансии увеличивает число
                            откликов на неё, при этом неважен размер зарплаты, а важно само её
                            указание. Кроме того, учтите, мы транслируем в наших соцсетях только
                            вакансии с зарплатами.
                        </p>
                        <div className="flex items-center gap-5 text-primary text-[14px]">
                            <span>От</span>
                            <Input type="text" />
                            <span>До</span>
                            <Input type="text" />
                            <span className=" w-full">Рублей на руки</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h5 className=" text-primary font-bold">Удаленное сотрудничество</h5>
                        <label className=" text-[16px] text-primary flex gap-3" htmlFor="">
                            <input type="checkbox" /> Рассматривается
                        </label>
                    </div>
                    <div className="flex flex-col gap-4 w-[50%]">
                        <h5 className=" text-primary font-bold">Тип занятости</h5>
                        <Select
                            classNamePrefix="custom-select"
                            options={workloads}
                            placeholder="Выберите"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className=" text-primary font-bold">Ожидания от кандидата * </h4>
                        <p className=" text-secondary text-[14px]">
                            Опишите вашего идеального кандидата: его или ее знания, хард- и
                            софт-скиллы, образование, опыт работы, другие важные для вас моменты.
                        </p>
                        <CKEditor
                            editor={ClassicEditor}
                            data={expections}
                            onChange={(event, editorData) =>
                                baseCKEChange(editorData, setExpections)
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className=" text-primary font-bold">Условия работы * </h4>
                        <p className=" text-secondary text-[14px]">
                            Расскажите про график работы, возможность удаленки, соцпакет, бургеры по
                            пятницам или корпоративный спортзал.
                        </p>
                        <CKEditor
                            editor={ClassicEditor}
                            data={condition}
                            onChange={(event, editorData) =>
                                baseCKEChange(editorData, setCondition)
                            }
                        />
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className=" text-primary font-bold">Бонусы * </h4>
                        <p className=" text-secondary text-[14px]">
                            Расскажите, какие материальные или нематериальные бонусы к зарплате есть
                            в вашей компании: премии, скидки, опционы, акции, возмещение оплаты за
                            обучение и другое.
                        </p>
                        <CKEditor
                            editor={ClassicEditor}
                            data={bonuse}
                            onChange={(event, editorData) => baseCKEChange(editorData, setBonuse)}
                        />
                        <Button
                            style={{ padding: '10px 20px', marginLeft: 'auto', marginTop: '50px' }}
                        >
                            Сохранить
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateVacancyPage
