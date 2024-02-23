import Input from '../UI/Input'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import Button from '../UI/Button'
import { Controller } from 'react-hook-form'
import ErrorMessage from '../UI/ErrorMessage'

const CreateRequiredData = ({
    control,
    setSex,
    sex,
    setExperience,
    experience,
    setAbout,
    about,
    baseCKEChange,
}) => {
    return (
        <div className="flex flex-col gap-5 mt-5">
            <div className="bg-white pr-20 pl-10 py-10">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <span className="text-[14px] font-semibold text-primary">Имя *</span>
                        <Controller
                            name="first_name"
                            defaultValue=""
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input {...field} placeholder="Имя" />
                                    {error?.type == 'required' && <ErrorMessage />}
                                </>
                            )}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[14px] font-semibold text-primary">Фамилия *</span>
                        <Controller
                            name="last_name"
                            defaultValue=""
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field, fieldState: { error } }) => (
                                <>
                                    <Input {...field} placeholder="Фамилия" />
                                    {error?.type == 'required' && <ErrorMessage />}
                                </>
                            )}
                        />
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                            <span className="text-[14px] font-semibold text-primary">Поль: </span>
                            <div className="flex gap-10">
                                <div className="flex gap-1 items-center">
                                    <input
                                        type="radio"
                                        name="sex"
                                        id="man"
                                        onChange={() => setSex(0)}
                                        checked={sex === 0 ? true : false}
                                    />
                                    <label className="text-secondary text-[14px]" htmlFor="man">
                                        Мужской
                                    </label>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <input
                                        type="radio"
                                        name="sex"
                                        id="woman"
                                        onChange={() => setSex(1)}
                                        checked={sex === 1 ? true : false}
                                    />
                                    <label className="text-secondary text-[14px]" htmlFor="woman">
                                        Женской
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[14px] font-semibold text-primary">
                                Дата рождения
                            </span>
                            <Controller
                                name="birthday"
                                defaultValue=""
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field, fieldState: { error } }) => (
                                    <>
                                        <Input {...field} type="date" />
                                        {error?.type == 'required' && <ErrorMessage />}
                                    </>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white pr-20 pl-10 py-10 flex flex-col gap-10">
                <div className="mt-10 flex flex-col gap-3">
                    <span className="text-primary text-[14px] font-semibold">
                        Расскажите о себе *
                    </span>
                    <CKEditor
                        editor={ClassicEditor}
                        data={about}
                        onChange={(_, editorData) => baseCKEChange(editorData, setAbout)}
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <span className="text-primary text-[14px] font-semibold">
                        Раскажите о своем опыте
                    </span>
                    <CKEditor
                        editor={ClassicEditor}
                        data={experience}
                        onChange={(_, editorData) => baseCKEChange(editorData, setExperience)}
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-primary text-[14px] font-semibold">
                        Введите всой телефон *
                    </span>
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: true,
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <>
                                <Input {...field} placeholder="Телефон" />
                                {error?.type == 'required' && <ErrorMessage />}
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-primary text-[14px] font-semibold">
                        Введите желаемая зарплата в рублях
                    </span>
                    <Controller
                        name="salary"
                        rules={{
                            validate: value => parseInt(value) > 10000,
                        }}
                        control={control}
                        defaultValue=""
                        render={({ field, fieldState: { error } }) => (
                            <>
                                <Input {...field} type="number" placeholder="Желаемая зарплата" />
                                {error?.type === 'validate' && (
                                    <ErrorMessage message="Значение должен быть больше 10000" />
                                )}
                            </>
                        )}
                    />
                </div>
                <div className="ml-auto mt-5">
                    <Button>Сохранить</Button>
                </div>
            </div>
        </div>
    )
}

export default CreateRequiredData
