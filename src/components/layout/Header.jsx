import '../../styles.css'
import nots from '../../assets/nots.png'
import email from '../../assets/email.png'
import profile from '../../assets/my.jpg'
import { Link, NavLink } from 'react-router-dom'
import './link.css'
import Button from '../UI/Button'
import useAuth from '../../hooks/use-auth'
import DropDown from './DropDown'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeOpenDropdown } from '../../feautures/layout/layout-slice'

function Header() {
    const { isAuth } = useAuth()
    const dispatch = useDispatch()
    const openDrop = useSelector(state => state.dropdown)
    return (
        <>
            <header className="shadow-sm bg-white">
                <div className="mx-auto max-w-[1200px] flex justify-between py-[20px] items-center">
                    <nav>
                        <ul className=" flex gap-[20px] items-center justify-center text-[16px]">
                            <li>
                                <NavLink className="link" to="/">
                                    Вакансии
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/specials">
                                    Специалисты
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/eksperts">
                                    Эксперты
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/companies">
                                    Компании
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/rankings">
                                    Рейтинг
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/sales">
                                    Зарплаты
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/education">
                                    Образование
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="link" to="/journal">
                                    Журнал
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    {isAuth ? (
                        <div className=" flex gap-[20px] items-center">
                            <a href="">
                                <img width="24px" src={nots} alt="" />
                            </a>
                            <a href="">
                                <img width="24px" src={email} alt="" />
                            </a>
                            <span className=" cursor-pointer">
                                <img
                                    onClick={() => !openDrop && dispatch(changeOpenDropdown())}
                                    className="rounded-[50%]"
                                    width="30px"
                                    src={profile}
                                    alt=""
                                />
                            </span>
                        </div>
                    ) : (
                        <Link to="/login">
                            <Button>Войти</Button>
                        </Link>
                    )}
                </div>
            </header>
            <div className="max-w-[1200px] mx-auto flex justify-end">
                <DropDown />
            </div>
        </>
    )
}

export default Header
