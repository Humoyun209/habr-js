import { Link } from "react-router-dom"

const LoginPage = () => {
    return (
        <div className="mt-20 max-w-[460px] mx-auto">
            <div className="flex flex-col gap-8 bg-white p-5" >
                <span className="font-semibold text-[16px]">Войти</span>
                <hr />
                <form method="post" className="flex flex-col gap-10">
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold text-[16px]">E-mail</span>
                        <input type="text" className="w-full border-[1px] border-secondary p-2 outline-none"/>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold text-[16px]">Пароль</span>
                        <input type="password" className="w-full border border-secondary p-2 outline-none"/>
                    </div>
                    <button type="submit" className="w-full bg-[#376f9a] border-none text-white font-medium py-3 ">Войти</button>
                </form>
            </div>
            <div className="mt-5 bg-white p-5 text-center">
                <span className="text-primary">Нет аккаунта? </span>
                <Link className="text-blue hover:underline" to="/register">Регистрация</Link>
            </div>
        </div>
    )
}


export default LoginPage