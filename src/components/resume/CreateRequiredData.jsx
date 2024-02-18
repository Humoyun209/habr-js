import Select from 'react-select'
import Input from '../UI/Input'
import Button from '../UI/Button'
import { levels, socials } from '../../global'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react'

const CreateRequiredData = () => {
    const [about, setAbout] = useState('')
    const [experience, setExperience] = useState('')

    const baseCKEChange = (editorData, setState) => {
        const data = editorData.getData()
        setState(data)
    }

    return (
        <div className="flex flex-col gap-5 mt-5">
            <div className="bg-white pr-20 pl-10 py-10">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <span className="text-[14px] font-semibold text-primary">Имя *</span>
                        <Input placeholder="Имя" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[14px] font-semibold text-primary">Фамилия *</span>
                        <Input placeholder="Фамилия" />
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-2">
                            <span className="text-[14px] font-semibold text-primary">Поль: </span>
                            <div className="flex gap-10">
                                <div className="flex gap-1 items-center">
                                    <input type="radio" name="sex" id="man" />
                                    <label className="text-secondary text-[14px]" htmlFor="man">
                                        Мужской
                                    </label>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <input type="radio" name="sex" id="woman" />
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
                            <Input type="date" />
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex flex-col gap-3 w-[50%]">
                    <span className="text-primary text-[14px] font-semibold">Ваш город: </span>
                    <Select
                        classNamePrefix="custom-select"
                        placeholder="Ваш город"
                        options={levels}
                    />
                </div>
            </div>
            <div className="bg-white pr-20 pl-10 py-10">
                <div className="mt-5 flex flex-col gap-3 w-[50%]">
                    <span className="text-primary text-[14px] font-semibold">Кваливикация: </span>
                    <Select
                        classNamePrefix="custom-select"
                        placeholder="Кваливикация"
                        options={levels}
                    />
                </div>
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

                <div className="mt-10 flex flex-col gap-3">
                    <span className="text-primary text-[14px] font-semibold">
                        Раскажите о своем опыте
                    </span>
                    <CKEditor
                        editor={ClassicEditor}
                        data={experience}
                        onChange={(_, editorData) => baseCKEChange(editorData, setExperience)}
                    />
                </div>
                <div className="mt-10 flex flex-col gap-3">
                    <span className="text-primary text-[14px] font-semibold">
                        Введите желаемая зарплата в рублях
                    </span>
                    <Input type="number" placeholder="Желаемая зарплата" />
                </div>
            </div>
            <div className="bg-white pr-20 pl-10 py-10 flex flex-col">
                <div className="mt-5 flex flex-col gap-3">
                    <span className="text-primary text-[14px] font-semibold">Телефон * </span>
                    <Input placeholder="Телефон" />
                </div>
                <div className="mt-10 flex flex-col gap-3 ">
                    <span className=" text-primary text-[14px] font-semibold">
                        Выберите аккаунт соцю сетей
                    </span>
                    <div className="flex justify-between gap-10">
                        <Select
                            className=" w-[35%]"
                            classNamePrefix="custom-select"
                            options={socials}
                        />
                        <Input placeholder="Линк соц. сета" />
                    </div>
                </div>
                <div className="mt-10 flex gap-2 ">
                    <input type="checkbox" id="isRemote" />
                    <label className="text-primary font-medium" htmlFor="isRemote">
                        Готов к удаленной работе
                    </label>
                </div>
                <div className=" ml-auto mt-10">
                    <Button type="submit">Сохранить</Button>
                </div>
            </div>
        </div>
    )
}

export default CreateRequiredData
