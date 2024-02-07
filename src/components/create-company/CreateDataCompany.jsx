import Input from "../UI/Input"
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Button from "../UI/Button";
import Select from "react-select";
import { useGetCitiesQuery } from "../../feautures/create-company/actions";
import { Controller } from "react-hook-form";
import ErrorMessage from "../UI/ErrorMessage";

const CreateDataCompany = ({handleAboutChange, about, control}) => {

    const {data: fetchCities = [], isLoading} = useGetCitiesQuery()
    const cities = fetchCities.map(city => ({
        value: city.id,
        label: city.name
    }))
    
    return (
        <div className=" bg-white py-8 pl-5 pr-20 flex flex-col gap-8 my-5">
            {isLoading && <h1>Loading...</h1>}
            <span className=" font-semibold text-[18px]">Карточка компании</span>
            <hr />
            <div className="flex flex-col gap-2 text-primary">
                <span className="font-semibold">Название компании *</span>
                <span className=" text-secondary text-[14px]">Укажите, как будет отображаться название компании для пользователей.</span>
                <Controller
                    name="name"
                    defaultValue=""
                    control={control}
                    rules={{
                        required: true,
                        maxLength: {
                            value: 40,
                            message: "Длина превесила 40 символов"
                        }
                    }}
                    render={({field, fieldState: {error}}) => 
                            <>
                                <Input {...field} />
                                {
                                    error?.type === 'required' && <ErrorMessage /> ||
                                    error?.type === 'maxLength' && <ErrorMessage message={error?.message}/>
                                }
                            </>
                    }
                />
                
            </div>
            <div className="flex flex-col gap-2 text-primary">
                <span className="font-semibold">Сайт компании *</span>
                <span className=" text-secondary text-[14px]">Укажите ссылку на сайт или одну из соцсетей компании. Ссылка должна начинаться с http:// или https://.</span>
                <Controller
                    name="url"
                    defaultValue=""
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({field, fieldState: {error}}) => <>
                        <Input {...field} />
                        {
                            error?.type === 'required' && <ErrorMessage />
                        }
                    </>}
                />
                
            </div>
            <div className="flex flex-col gap-2 text-primary">
                <span className="font-semibold">Телефон для соискателей *</span>
                <span className=" text-secondary text-[14px]">Укажите номер, по которому специалисты могут связаться с вашей компанией.</span>
                <Controller
                    name="phone"
                    defaultValue=""
                    control={control} 
                    rules={{
                        required: true
                    }}
                    render={({field, fieldState: {error, }}) => <>
                        <Input {...field } placeholder="Например: +7 (123) 456-78-90" />
                        {
                            error?.type === 'required' && <ErrorMessage />
                        }
                    </>}
                />
            </div>
            <div className="flex flex-col gap-2 text-primary">
                <span className="font-semibold">Email для соискателей *</span>
                <span className=" text-secondary text-[14px]">Укажите Email, по которому можно вам написать</span>
                <Controller
                    name="email"
                    defaultValue=""
                    control={control} 
                    rules={{
                        required: true
                    }}
                    render={({field, fieldState: {error, }}) => <>
                        <Input {...field}  placeholder="Email вашей компании"/>
                        {
                            error?.type === 'required' && <ErrorMessage />
                        }
                    </>}
                />
                
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
                <Controller
                    name="city"
                    control={control} 
                    rules={{
                        required: true
                    }}
                    render={({field, fieldState: {error }}) => <>
                        <Select
                            {...field}
                            classNamePrefix="my-select"
                            options={cities}
                            isSearchable
                            placeholder=""
                            isLoading={isLoading}
                        />
                        {
                            error?.type === 'required' && <ErrorMessage />
                        }
                    </>}
                />
            </div>
            <Button type="submit">Создать компанию</Button>
        </div>
    )
}


export default CreateDataCompany