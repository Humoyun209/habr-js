import { levels, workloads } from '../global'
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
import { useCreateVacancyMutation, useGetTagsQuery } from '../feautures/vacancies/actions'
import { useParams } from 'react-router-dom'
import useAuth from '../hooks/use-auth'

const CreateVacancyPage = () => {
    const { handleSubmit, control, register } = useForm({ mode: 'onBlur' })
    const [addVacancy] = useCreateVacancyMutation()
    const animatedComponent = makeAnimated()
    const { companyId } = useParams()
    const { access_token } = useAuth()

    const [conditions, setConditions] = useState('')
    const [bonuses, setBonuses] = useState('')
    const [expectation, setExpectation] = useState('')

    const baseCKEChange = (editorData, setState) => {
        const data = editorData.getData()
        setState(data)
    }

    const handleCreate = async data => {
        const vacancy = { ...data }
        vacancy.conditions = conditions
        vacancy.bonuses = bonuses
        vacancy.expectation = expectation
        vacancy.tags = data.tags.map(tag => tag.value)
        vacancy.workload = data.workload.label
        vacancy.level = data.level.label
        vacancy.min_salary = parseFloat(data.min_salary)
        vacancy.max_salary = parseFloat(data.max_salary)
        vacancy.company_id = parseInt(companyId)
        const result = await addVacancy({ body: vacancy, access_token })
        console.log(vacancy)
        console.log(result)
    }

    const { data: fetchTags = [], isLoading } = useGetTagsQuery()

    const tags = fetchTags.map(tag => ({
        value: tag.id,
        label: tag.name,
    }))

    return (
        <div className=" grid grid-cols-12 gap-5 max-w-[1200px] mx-auto my-5">
            <div className=" col-span-3">{/* <SideBarCompany /> */}</div>
            <form
                className=" col-span-9 flex flex-col gap-5"
                method="POST"
                onSubmit={handleSubmit(handleCreate)}
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
                        name="title"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <>
                                <Input {...field} placeholder="Название вакансии..." />
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
                            name="level"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Select
                                        {...field}
                                        options={levels}
                                        classNamePrefix="custom-select"
                                        placeholder="Выберите квалификацию..."
                                        isSearchable
                                        components={animatedComponent}
                                    />
                                    {error?.type && <ErrorMessage />}
                                </>
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
                            rules={{
                                required: true,
                            }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    isLoading={isLoading}
                                    options={tags}
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
                            <Controller
                                name="min_salary"
                                control={control}
                                rules={{
                                    maxLength: {
                                        value: 10,
                                    },
                                }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input {...field} type="number" />
                                        {error?.type === 'maxLength' && (
                                            <ErrorMessage message="Максималная длина до 10" />
                                        )}
                                    </>
                                )}
                            />

                            <span>До</span>
                            <Controller
                                name="max_salary"
                                control={control}
                                rules={{
                                    maxLength: {
                                        value: 10,
                                    },
                                }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input {...field} type="number" />
                                        {error?.type === 'maxLength' && (
                                            <ErrorMessage message="Максималная длина до 10" />
                                        )}
                                    </>
                                )}
                            />
                            <span className=" w-full">Рублей на руки</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h5 className=" text-primary font-bold">Удаленное сотрудничество</h5>
                        <label className=" text-[16px] text-primary flex gap-3" htmlFor="">
                            <input {...register('is_remote')} type="checkbox" /> Рассматривается
                        </label>
                    </div>
                    <div className="flex flex-col gap-4 w-[50%]">
                        <h5 className=" text-primary font-bold">Тип занятости</h5>
                        <Controller
                            name="workload"
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Select
                                        {...field}
                                        classNamePrefix="custom-select"
                                        options={workloads}
                                        placeholder="Выберите"
                                    />
                                    {error?.type === 'required' && <ErrorMessage />}
                                </>
                            )}
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
                            data={expectation}
                            onChange={(event, editorData) =>
                                baseCKEChange(editorData, setExpectation)
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
                            data={conditions}
                            onChange={(event, editorData) =>
                                baseCKEChange(editorData, setConditions)
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
                            data={bonuses}
                            onChange={(event, editorData) => baseCKEChange(editorData, setBonuses)}
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
