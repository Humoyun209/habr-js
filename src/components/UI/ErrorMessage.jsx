const ErrorMessage = ({message}) => {
    return (
        <div className="h-[40px] mt-1 text-red-500">
            * {message || "Поле обязателен к заполнению"}
        </div>
    )
}

export default ErrorMessage