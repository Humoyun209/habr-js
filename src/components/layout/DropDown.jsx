import { useNavigate } from 'react-router-dom'
import profile from '../../assets/my.jpg'
import { useDispatch } from 'react-redux'
import { LogOutAction } from '../../feautures/auth/slice'

const DropDown = ({open, setOpen}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(LogOutAction())
        navigate('/login')
        setOpen(!open)
    }
    return (
        <div style={{visibility: open ? 'visible' : 'hidden'}} className="flex flex-col py-2 border max-w-[250px] bg-white absolute">
            <div className=' flex items-center justify-center gap-5 px-4 pb-4'>
                <img className='rounded-[50%]' width='50px' src={profile} alt="" />
                <div className=' flex flex-col gap-2'>
                    <span className=' font-semibold text-[18px] text-primary leading-[22px]'>Humoyun Ahmedov</span>
                    <span className='text-[14px] text-secondary leading-[20px]'>humoyun209</span>
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