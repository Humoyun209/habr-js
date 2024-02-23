import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import profile from '../../assets/my.jpg'
import defaultLogo from '../../assets/profile/minionLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { LogOutAction } from '../../feautures/auth/slice'
import { useEffect } from 'react'
import { changeOpenDropdown } from '../../feautures/layout/layout-slice'
import useAuth from '../../hooks/use-auth'
import { AnimatePresence, motion } from 'framer-motion'

const DropDown = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const openDrop = useSelector(state => state.dropdown)
    const { user, isAuth, resume } = useAuth()

    useEffect(
        () => () => {
            openDrop && dispatch(changeOpenDropdown())
        },
        [dispatch],
    )

    const handleLogout = () => {
        dispatch(LogOutAction())
        navigate('/login')
    }
    return (
        <AnimatePresence>
            {openDrop && (
                <motion.div
                    initial={{
                        height: 0,
                        opacity: 0,
                    }}
                    animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                        },
                    }}
                    exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                            duration: 0.5,
                        },
                    }}
                    className={`flex flex-col py-2 border max-w-[250px] bg-white absolute`}
                >
                    <div className=" flex items-center justify-center gap-5 px-4 pb-4">
                        <img
                            className="rounded-[50%]"
                            width="50px"
                            src={resume ? profile : defaultLogo}
                            alt=""
                        />
                        <div className=" flex flex-col gap-2">
                            <span className=" font-semibold text-[18px] text-primary leading-[22px]">
                                Anonym User
                            </span>
                            <span className="text-[14px] text-secondary leading-[20px]">
                                {user.username}
                            </span>
                        </div>
                    </div>
                    <hr />
                    {isAuth && resume && (
                        <>
                            <Link
                                to="/profile/personal/edit"
                                className="hover:bg-blue hover:text-white p-2 cursor-pointer transition-colors duration-200 ease-in-out"
                            >
                                Личный кабинет
                            </Link>
                            <hr />
                            <Link
                                to="/profile/favorite-vacancies"
                                className="hover:bg-blue hover:text-white p-2 cursor-pointer transition-colors duration-200 ease-in-out"
                            >
                                Избранные вакансии
                            </Link>
                            <hr />
                            <Link
                                to="/profile/responses"
                                className="hover:bg-blue hover:text-white p-2 cursor-pointer transition-colors duration-200 ease-in-out"
                            >
                                Отклики на вакансии
                            </Link>
                            <hr />
                            <Link
                                to="/profile/friends"
                                className="hover:bg-blue hover:text-white p-2 cursor-pointer transition-colors duration-200 ease-in-out"
                            >
                                Друзья
                            </Link>
                            <hr />
                        </>
                    )}
                    {isAuth && (
                        <div
                            onClick={handleLogout}
                            className="hover:bg-blue hover:text-white p-2 cursor-pointer transition-colors duration-200 ease-in-out"
                        >
                            Выход
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default DropDown
