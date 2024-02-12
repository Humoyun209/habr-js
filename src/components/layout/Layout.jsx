import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeOpenDropdown } from '../../feautures/layout/layout-slice'

const Layout = () => {
    const dispatch = useDispatch()
    const openDrop = useSelector(state => state.dropdown)

    return (
        <div onClick={() => openDrop && dispatch(changeOpenDropdown())}>
            <ToastContainer />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
