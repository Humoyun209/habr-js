import createImg from "../../assets/image-create.png"
import Button from "../UI/Button"
import { useRef, useState } from "react"

const CreateLogo = () => {
    const fileRef = useRef(null)
    const [logo, setLogo] = useState("")

    const handleChangeImage = (event) => {
        const data = new FormData()
        const photo = event.target.files[0]
        setLogo(URL.createObjectURL(photo))
        data.append('photo', photo)
        data.append('name', 'Messi')

        fetch("http://127.0.0.1:8000/company/create/image", {
            method: 'POST',
            body: data,
            headers: {
                type: "multipart/form-data"
            }
        }).then(data => data.json())
        .then((res => console.log(res)))
        .catch(err => console.log(err))
    }

    

    return (
        <div className="flex flex-col gap-5 items-center justify-center py-[50px] px-[75px] bg-cardBg">
            <img
                className={`${logo ? "rounded-[10px] h-[200px] w-[200px]" : ""}`} src={logo || createImg} alt="" />
            <div className=" text-secondary">
                <p className=" text-center">Лого вашей компании.</p>
                <p>Рекомендуемый размер 200х200px</p>
            </div>
            <input onChange={handleChangeImage} type="file" name="logo" ref={fileRef} style={{ display: 'none' }} accept="image/*,.png,.jpg,.svg"/>
            <Button onClick={() => fileRef.current.click()}>Загрузить</Button>
        </div>
    )
}


export default CreateLogo