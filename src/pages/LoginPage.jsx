import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginThunkAction } from "../feautures/auth/thunk-actions";
import { useState } from "react";
import useAuth from "../hooks/use-auth";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");
  const { errorMessage  } = useAuth()

  const handleLogin = (event) => {
    event.preventDefault();
    if (username && pass) {
    dispatch(loginThunkAction(
        JSON.stringify({ username, password: pass }))
      )
      .unwrap()
      .then(() => {
        navigate('/')
        toast.success("Вы успешно авторизовались!")
      })
      .catch(() => {
        toast.error(errorMessage)
      })

      setPass("");
      setUsername("");
    }
  };
  return (
    <>
      <div className="mt-20 max-w-[460px] mx-auto">
        <div className="flex flex-col gap-8 bg-white p-5">
          <span className="font-semibold text-[16px]">Войти</span>
          <hr />
          <form
            method="post"
            className="flex flex-col gap-10"
            onSubmit={handleLogin}
          >
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-[16px]">Username</span>
              <input
                onChange={(event) => setUsername(event.target.value)}
                value={username}
                name="username"
                type="text"
                className="w-full border-[1px] border-secondary p-2 outline-none"
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-semibold text-[16px]">Пароль</span>
              <input
                onChange={(event) => setPass(event.target.value)}
                value={pass}
                name="pass"
                type="password"
                className="w-full border border-secondary p-2 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#376f9a] border-none text-white font-medium py-3 "
            >
              Войти
            </button>
          </form>
        </div>
        <div className="mt-5 bg-white p-5 text-center">
          <span className="text-primary">Нет аккаунта? </span>
          <Link className="text-blue hover:underline" to="/register">
            Регистрация
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
