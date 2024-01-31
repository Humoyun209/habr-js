import createImg from "../../assets/image-create.png"
import Button from "../UI/Button"

const CreateLogo = () => {
    return (
        <div className="flex flex-col gap-5 items-center justify-center py-[50px] px-[75px] bg-cardBg">
            <img src={createImg} alt="" />
            <div className=" text-secondary">
                <p className=" text-center">Лого вашей компании.</p>
                <p>Рекомендуемый размер 200х200px</p>
            </div>
            <Button>Загрузить</Button>
        </div>
    )
}


export default CreateLogo