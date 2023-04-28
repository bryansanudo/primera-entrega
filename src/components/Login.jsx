import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = ({ setAuth }) => {
  const handlerLogin = () => {
    setAuth(true);
  };

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg mt-40">
          {/* <h1 className="text-center text-2xl font-bold text-[#36b5d3] sm:text-3xl">
            Get started today
          </h1> */}

          {/* <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p> */}

          <form className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-xl shadow-gray-500 sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">Iniciar Sesion</p>

            <div>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Correo Electronico"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <AiOutlineMail className="text-2xl" />
                </span>
              </div>
            </div>

            <div>
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Contraseña"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <RiLockPasswordLine className="text-2xl" />
                </span>
              </div>
            </div>

            <button
              onClick={handlerLogin}
              type="submit"
              className="block w-full hover:text-black hover:scale-105 duration-300 rounded-lg bg-[#36b5d3] px-5 py-3 text-sm font-medium text-white"
            >
              Ingresar
            </button>

            <p className="text-center text-sm text-gray-500">
              Olvidaste tu constraseña?
              <a className="underline ml-1" href="">
                Restablecer
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
