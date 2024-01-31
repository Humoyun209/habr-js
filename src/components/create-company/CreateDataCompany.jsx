import Input from "../UI/Input"
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import Button from "../UI/Button";

const CreateDataCompany = () => {
    const [about, setAbout] = useState('')

    const handleAboutChange = (event, editorData) => {
        const data = editorData.getData()
        setAbout(data)
    }
    return (
        <form className=" bg-white py-8 pl-5 pr-20 flex flex-col gap-8 my-5" method="post">
            <span className=" font-semibold text-[18px]">Карточка компании</span>
            <hr />
            <div className="flex flex-col gap-2 text-primary">
                <span className="font-semibold">Название компании *</span>
                <span className=" text-secondary text-[14px]">Укажите, как будет отображаться название компании для пользователей.</span>
                <Input name="span" type="text" />
            </div>
            <div className="flex flex-col gap-2 text-primary">
                <span className="font-semibold">Сайт компании *</span>
                <span className=" text-secondary text-[14px]">Укажите ссылку на сайт или одну из соцсетей компании. Ссылка должна начинаться с http:// или https://.</span>
                <Input name="url" type="text" />
            </div>
            <div className="flex flex-col gap-2 text-primary">
                <span className="font-semibold">Телефон для соискателей *</span>
                <span className=" text-secondary text-[14px]">Укажите номер, по которому специалисты могут связаться с вашей компанией.</span>
                <Input name="span" type="text"  placeholder="Например: +7 (123) 456-78-90"/>
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
                <Input name="url" type="text" />
            </div>

            <Button type="submit">Создать компанию</Button>
        </form>
    )
}


export default CreateDataCompany