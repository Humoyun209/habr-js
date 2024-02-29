import profileLogo from '../../assets/profile/defaultLogo.png'
import Button from '../UI/Button'
import { Link } from 'react-router-dom'

import { useRef, useState } from 'react'
import Input from '../UI/Input'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import { levels, socials } from '../../global'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const EditDataResume = ({ resume, tags }) => {
    console.log(tags)
    const inputRef = useRef(null)
    const [pLogo, setPLogo] = useState(null)
    return (
        <>
            <div className="bg-white py-10 px-5 flex flex-col gap-5 justify-center items-center mt-5">
                <img
                    className=" w-[150px] h-[150px] rounded-[50%] border borde"
                    src={!pLogo ? profileLogo : pLogo}
                    alt=""
                />
                <span className="text-secondary text-[14px]">
                    Ваша фотография. Формат: jpg, png. <br />
                    Максимальный размер файла: 2Mb. <br />
                    Рекомендованный размер: 200х200 px.{' '}
                </span>
                <input
                    type="file"
                    accept="img"
                    ref={inputRef}
                    onChange={e => setPLogo(e.target.files[0])}
                    style={{ display: 'none' }}
                />
                <div className="flex justify-center gap-3 items-center">
                    <Button onClick={() => inputRef.current.click()}>Загрузить</Button>
                    <Link to="/" className=" text-secondary font-semibold">
                        Удалить
                    </Link>
                </div>
            </div>
            <div className="bg-white py-10 pl-10 pr-48 mt-5">
                <div className="flex flex-col gap-3">
                    <span className="text-[14px] font-semibold text-primary">Имя *</span>
                    <span className="text-[14px] text-secondary">
                        Может состоять только из букв. Мы не принимаем цифры, спецсимволы и
                        обсценную лексику в этом поле
                    </span>
                    <Input value={resume.first_name} placeholder="Имя" />
                </div>
                <div className="flex flex-col gap-3 mt-10">
                    <span className="text-[14px] font-semibold text-primary">Фамилия *</span>
                    <span className="text-[14px] text-secondary">
                        Может состоять только из букв. Мы не принимаем цифры, спецсимволы и
                        обсценную лексику в этом поле
                    </span>
                    <Input value={resume.last_name} placeholder="Фамилия" />
                </div>
                <div className="mt-10 flex flex-col gap-3 w-[50%]">
                    <span className="text-primary text-[14px] font-semibold">Квалификация: </span>
                    <Select
                        components={makeAnimated()}
                        classNamePrefix="custom-select"
                        placeholder="Квалификация"
                        options={levels}
                    />
                </div>
                <div className="flex flex-col gap-3 mt-10">
                    <span className="text-[14px] font-semibold text-primary">Телефон *</span>
                    <span className="text-[14px] text-secondary">
                        Может состоять только из букв. Мы не принимаем цифры, спецсимволы и
                        обсценную лексику в этом поле
                    </span>
                    <Input value={resume.phone} placeholder="Телефон" />
                </div>
                <div className="flex flex-col gap-3 mt-10">
                    <span className="text-[14px] font-semibold text-primary">Пол *</span>
                    <div className="flex gap-2 items-center">
                        <input name="sex" type="radio" id="man" checked={resume.sex === 0} />
                        <label htmlFor="man">Мужской</label>
                    </div>
                    <div className="flex gap-2 items-center">
                        <input name="sex" type="radio" id="woman" checked={resume.sex === 1} />
                        <label htmlFor="woman">Женской</label>
                    </div>
                </div>
                <div className="flex flex-col gap-3 mt-10">
                    <span className="text-[14px] font-semibold text-primary">О себе *</span>
                    <span className="text-[14px] text-secondary">
                        Расскажите о себе в подробностях. Минимальное количество символов — 50 (это
                        примерно одно среднее предложение)
                    </span>
                    <CKEditor editor={ClassicEditor} data={resume.about} />
                </div>
                <div className="flex flex-col gap-3 mt-10">
                    <span className="text-[14px] font-semibold text-primary">Опыт работы *</span>
                    <span className="text-[14px] text-secondary">Расскажите о своем опыте</span>
                    <CKEditor editor={ClassicEditor} />
                </div>
                <div className=" flex flex-col gap-3 mt-10">
                    <span className="text-primary text-[14px] font-semibold">Укажите навыки</span>
                    <Select
                        placeholder="Навыки"
                        classNamePrefix="custom-select"
                        components={makeAnimated()}
                        isMulti
                        isSearchable
                        // defaultValue={tags.map((tag, i) => ({ value: i, label: tag }))}
                        options={tags.map(tag => ({ value: tag.id, label: tag.name }))}
                    />
                </div>
                <div className=" flex flex-col gap-3 mt-10">
                    <span className="text-primary text-[14px] font-semibold">Городы *</span>
                    <Select
                        placeholder="Городы"
                        classNamePrefix="custom-select"
                        components={makeAnimated()}
                        isMulti
                        isSearchable
                        options={tags.map((tag, i) => ({ value: i, label: tag }))}
                    />
                </div>
                <div className="bg-white flex flex-col">
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
        </>
    )
}

export default EditDataResume
