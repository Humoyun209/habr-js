import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/use-auth'
import { toast } from 'react-toastify'
import { registerThunkAction } from '../feautures/auth/thunk-actions'

const RegisterPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { errorMessage } = useAuth()

    const handleSubmit = event => {
        event.preventDefault()
        const username = event.target.username.value
        const email = event.target.email.value
        const password = event.target.password.value
        const password2 = event.target.password2.value
        if (username && email && password && password2 && password === password2) {
            dispatch(
                registerThunkAction(
                    JSON.stringify({
                        username,
                        email,
                        password,
                        password2,
                    }),
                ),
            )
                .unwrap()
                .then(() => {
                    navigate('/profile/personal/create')
                    toast.success('Вы успешно зарегистрировались!!!')
                })
                .catch(() => toast.error(errorMessage))
        } else {
            toast.error('Правильно введите все поля!')
        }
    }

    return (
        <div className="mt-20 max-w-[460px] mx-auto">
            <div className="flex flex-col gap-8 bg-white p-5">
                <span className="font-semibold text-[16px]">Регистрация</span>
                <hr />
                <form method="post" className="flex flex-col gap-10" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold text-[16px]">E-mail</span>
                        <input
                            name="email"
                            type="email"
                            className="w-full border border-secondary p-2 outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold text-[16px]">Никнейм</span>
                        <input
                            name="username"
                            type="text"
                            className="w-full border border-secondary p-2 outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold text-[16px]">Пароль</span>
                        <input
                            name="password"
                            type="password"
                            className="w-full border border-secondary p-2 outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold text-[16px]">Пароль ещё раз</span>
                        <input
                            name="password2"
                            type="password"
                            className="w-full border border-secondary p-2 outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#376f9a] border-none text-white font-medium py-3 "
                    >
                        Регистрация
                    </button>
                </form>
            </div>
            <div className="mt-5 bg-white p-5 text-center">
                <span className="text-primary">Есть аккаунт? </span>
                <Link className="text-blue hover:underline" to="/login">
                    Авторизация
                </Link>
            </div>
        </div>
    )
}

export default RegisterPage
