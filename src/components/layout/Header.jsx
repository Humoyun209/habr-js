import '../../styles.css'
import nots from '../../assets/nots.png'
import email from '../../assets/email.png'
import profile from '../../assets/my.jpg'

function Header() {
    return ( 
        <header className="shadow-sm bg-white">
            <div className='mx-auto max-w-[1200px] flex justify-between py-[20px] items-center'>
                <nav> 
                    <ul className=' flex gap-[20px] items-center justify-center text-[16px]'>
                        <li><a className='text-gray-500 hover:text-[#222]' href="">Вакансии</a></li>
                        <li><a className='text-gray-500 hover:text-[#222]' href="">Специалисты</a></li>
                        <li><a className='text-gray-500 hover:text-[#222]' href="">Эксперты</a></li>
                        <li><a className='text-gray-500 hover:text-[#222]' href="">Компании</a></li>
                        <li><a className='text-gray-500 hover:text-[#222]' href="">Рейтинг</a></li>
                        <li><a className='text-gray-500 hover:text-[#222]' href="">Зарплаты</a></li>
                        <li><a className='text-gray-500 hover:text-[#222]' href="">Образование</a></li>
                        <li><a className='text-gray-500 hover:text-[#222]' href="">Журнал</a></li>
                    </ul>
                </nav>
                <div className=' flex gap-[20px] items-center'>
                    <a href=""><img width='24px' src={nots} alt="" /></a>
                    <a href=""><img width='24px' src={email} alt="" /></a>
                    <a href=""><img className='rounded-[50%]' width='30px' src={profile} alt="" /></a>
                </div>
            </div>
        </header>
     );
}

export default Header;