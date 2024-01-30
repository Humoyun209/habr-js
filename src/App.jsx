import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { LogOutAction } from "./feautures/auth/slice"
import { toast } from "react-toastify"
import { profileThunkAction } from "./feautures/auth/thunk-actions"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(profileThunkAction())
    .unwrap()
    .catch((error) => {
      dispatch(LogOutAction())
      toast.error(error.message)
    })
  }, [dispatch])


  return (
    <RouterProvider router={router} />
  )
}

export default App
