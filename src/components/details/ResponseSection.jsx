import Button from "../UI/Button"

const ResponseSection = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const notAuthemticated = (
        <div className=" flex flex-col gap-7 justify-center items-center">
            <img width={'86px'} src="https://career.habr.com/assets/packs/media/images/no_content.icon.response-5b165cac.svg" alt="" />
            <div className="flex flex-col items-center">
                <p className="text-primary text-[16px] font-semibold">Авторизуйтесь</p>
                <p className=" text-secondary text-[14px]">Откликаться на вакансии могут только зарегистрированные пользователи.</p>
            </div>
            <div className="flex gap-2">
                <Button>Войдите</Button>
                <Button>Зарегистрируйтесь </Button>
            </div>
        </div>
    )

    return (
        <div className="bg-white py-10 px-7  mt-5 flex flex-col gap-3">
            <span className="font-semibold text-primary">Ваш отклик</span>
            <hr />
            {notAuthemticated}
            {/* <p className="text-secondary text-[14px]">Работодатель прежде всего смотрит на ваш профиль, но вы также можете сопроводить свой отклик парой слов, чтобы привлечь внимание к своим самым важным профессиональным или личным качествам. </p>
            <form onSubmit={handleSubmit} className="flex flex-col items-start gap-5" method="post">
                <textarea className="w-full outline-none bg-bg p-3 text-secondary" rows="5"> </textarea>
                <Button type="submit">Откликнуться</Button>
            </form> */}
        </div>
    )
}

export default ResponseSection