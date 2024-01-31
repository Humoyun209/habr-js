const Input = ({name, placeholder, type}) => {
    return (
        <input 
            className=" border-none bg-inputBg focus:bg-inputBgFocus w-[100%] outline-none text-primary p-2 placeholder:text-secondary"
            type={type}
            name={name}
            placeholder={placeholder}
        />
    )
}

export default Input