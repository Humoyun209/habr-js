import { useNavigate } from 'react-router-dom'
import profile from '../../assets/my.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { LogOutAction } from '../../feautures/auth/slice'
import { useEffect } from 'react'
import { changeOpenDropdown } from '../../feautures/layout/layout-slice'
import useAuth from '../../hooks/use-auth'

const DropDown = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const openDrop = useSelector(state => state.dropdown)
    const { user } = useAuth()

    useEffect(() => () => {
        openDrop && dispatch(changeOpenDropdown())
    }, [dispatch])

    const handleLogout = () => {
        dispatch(LogOutAction())
        navigate('/login')
    }
    return (
        <div style={{visibility: openDrop ? 'visible' : 'hidden'}} className="flex flex-col py-2 border max-w-[250px] bg-white absolute">
            <div className=' flex items-center justify-center gap-5 px-4 pb-4'>
                <img className='rounded-[50%]' width='50px' src={profile} alt="" />
                <div className=' flex flex-col gap-2'>
                    <span className=' font-semibold text-[18px] text-primary leading-[22px]'>Anonym User</span>
                    <span className='text-[14px] text-secondary leading-[20px]'>{user.username}</span>
                </div>
            </div><hr />
            <div className='hover:bg-blue hover:text-white p-2 cursor-pointer'>Личный кабинет</div><hr />
            <div className='hover:bg-blue hover:text-white p-2 cursor-pointer'>Избранные вакансии</div><hr />
            <div className='hover:bg-blue hover:text-white p-2 cursor-pointer'>Отклики на вакансии</div><hr />
            <div className='hover:bg-blue hover:text-white p-2 cursor-pointer'>Друзья</div><hr />
            <div onClick={handleLogout} className='hover:bg-blue hover:text-white p-2 cursor-pointer'>Выход</div>
        </div>
    )
}

export default DropDown