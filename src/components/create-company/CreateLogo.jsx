import createImg from "../../assets/image-create.png";
import Button from "../UI/Button";
import { useRef } from "react";
import { useState } from "react";

const CreateLogo = ({logo, setLogo}) => {
  const fileRef = useRef(null);

  return (
    <div className="flex flex-col gap-5 items-center justify-center py-[50px] px-[75px] bg-cardBg">
      <img
        className={`${logo ? "rounded-[10px] h-[200px] w-[200px]" : ""}`}
        src={logo && URL.createObjectURL(logo) || createImg}
        alt=""
      />
      <div className=" text-secondary">
        <p className=" text-center">Лого вашей компании.</p>
        <p>Рекомендуемый размер 200х200px</p>
      </div>
        <input
            onChange={(event) => setLogo(event.target.files[0])}
            type="file"
            ref={fileRef}
            style={{ display: "none" }}
            accept="image/*,.png,.jpg,.svg"
        />
      <Button onClick={() => fileRef.current.click()}>Загрузить</Button>
    </div>
  );
};

export default CreateLogo;
