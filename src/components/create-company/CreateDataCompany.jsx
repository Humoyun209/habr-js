import Input from "../UI/Input"
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Button from "../UI/Button";
import Select from "react-select";
import { useState } from "react";
import { useGetCitiesQuery } from "../../feautures/create-company/actions";
import { Controller, useForm } from "react-hook-form";

const CreateDataCompany = ({handleAboutChange, about, city, setCity}) => {

    const {data: fetchCities = [], isLoading} = useGetCitiesQuery()
    const cities = fetchCities.map(city => ({
        value: city.id,
        label: city.name
    }))

    const {handleSubmit, register, control, formState: {errors}} = useForm({
        mode: "onBlur"
    })
    
    return (
        <div className=" bg-white py-8 pl-5 pr-20 flex flex-col gap-8 my-5">
            {isLoading && <h1>Loading...</h1>}
            <span className=" font-semibold text-[18px]">Карточка компании</span>
            <hr />
            <div className="flex flex-col gap-2 text-primary">
                <span className="font-semibold">Название компании *</span>
                <span className=" text-secondary text-[14px]">Укажите, как будет отображаться название компании для пользователей.</span>
                <Controller
                    name="title"
                    control={control}
                    rules={{
                        required: true,
                        maxLength: {
                            value: 40,
                            message: "Длина превесила 40 символов"
                        }
                    }}
                    render={({field, fieldState: {error}}) => {
                        return (
                            <>
                                <Input {...field} />
                                {
                                    error?.type === 'required' && <div className="h-[40px] mt-1 text-red-500">* Поле обязателен к заполнению</div> ||
                                    error?.type === 'maxLength' && <div className="h-[40px] mt-1 text-red-500">* {error?.message}</div>
                                }
                            </>
                        )
                    }}
                />
                
            </div>
            <div className="flex flex-col gap-2 text-primary">
                <span className="font-semibold">Сайт компании *</span>
                <span className=" text-secondary text-[14px]">Укажите ссылку на сайт или одну из соцсетей компании. Ссылка должна начинаться с http:// или https://.</span>
                <Input name="url" type="text" />
            </div>
            <div className="flex flex-col gap-2 text-primary">
                <span className="font-semibold">Телефон для соискателей *</span>
                <span className=" text-secondary text-[14px]">Укажите номер, по которому специалисты могут связаться с вашей компанией.</span>
                <Input name="phone" type="text"  placeholder="Например: +7 (123) 456-78-90"/>
            </div>
            <div className="flex flex-col gap-2 text-primary">
                <span className="font-semibold">Email для соискателей *</span>
                <span className=" text-secondary text-[14px]">Укажите Email, по которому можно вам написать</span>
                <Input name="email" type="email"  placeholder="Email вашей компании"/>
            </div>
            <div className="flex flex-col gap-2 text-primary">
                <span className="font-semibold">О компании *</span>
                <span className=" text-secondary text-[14px]">Чем больше информации о компании — тем легче соискателям составить первое
                        впечатление и принять решение об отклике на вакансию.</span>
                <CKEditor
                    editor={ ClassicEditor }
                    data={about}
                    onChange={ handleAboutChange}
                />
            </div>
            <div className="flex flex-col gap-2 text-primary">
                <span className="font-semibold">Город *</span>
                <span className=" text-secondary text-[14px]">Укажите где находится ваша компания</span>
                <Select 
                    classNamePrefix="my-select"
                    options={cities}
                    defaultValue={city}
                    onChange={setCity}
                    isSearchable
                    placeholder=""
                    isLoading={isLoading}
                />
            </div>
            <Button type="submit">Создать компанию</Button>
        </div>
    )
}


export default CreateDataCompany