import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { useEffect } from "react"
import useAuth from "./hooks/use-auth"
import axios from "axios"
import { useDispatch } from "react-redux"
import { LogOutAction } from "./feautures/auth/slice"
import { toast } from "react-toastify"

const App = () => {
  const { access_token } = useAuth()
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/users/profile',
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      }
    }
    )
    .then(({data}) => console.log(`${data.username} - authenticated`))
    .catch((error) => {
      dispatch(LogOutAction())
      toast.error(error.message)
    })
  }, [])
  return (
    <RouterProvider router={router} />
  )
}

export default App
