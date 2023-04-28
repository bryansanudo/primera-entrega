import { Link, Outlet } from "react-router-dom";
import { BiBell, BiUserCircle } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";

import { useState } from "react";

const Navbar = ({ setAuth }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const handlerLogout = () => {
    setAuth(false);
  };

  const links = [
    {
      id: 1,
      link: "/getFiles",
      name: "Listar Expedientes",
    },
    {
      id: 2,
      link: "/postFiles",
      name: "Crear Expediente",
    },
    /* {
      id: 3,
      link: "getStadistics",
      name: "Mostrar Estadisticas",
    }, */
  ];

  return (
    <>
      {/* <nav className="flex items-center justify-between px-[3%] pt-[10px] bg-red-500 ">
        <h2 className=" cursor-default text-[35px] text-white ">Bienvenido</h2>
        <ul>
          <Link to="getFiles">
            <li className="list-none inline-block py-[10px] px-[20px]">
              <span className="text-[20px] text-white no-underline font-bold uppercase relative hover:text-black hover:scale-105 duration-300  ">
                Listar Expedientes
              </span>
            </li>
          </Link>
          <Link to="postFiles">
            <li className="list-none inline-block py-[10px] px-[20px]">
              <span className="text-[20px] text-white no-underline font-bold uppercase relative hover:text-black hover:scale-105 duration-300  ">
                Crear Expedientes
              </span>
            </li>
          </Link>
          <Link to="getStadistics">
            <li className="list-none inline-block py-[10px] px-[20px]">
              <span className="text-[20px] text-white no-underline font-bold uppercase relative hover:text-black hover:scale-105 duration-300  ">
                Mostrar Estadisticas
              </span>
            </li>
          </Link>
        </ul>
        <div className="flex items-center">
          <BiBell className="cursor-pointer ml-[30px] text-white text-5xl" />
          <BiUserCircle
            className="cursor-pointer ml-[30px] text-white text-5xl"
            onClick={handlerLogout}
          />
        </div>
      </nav> */}
      <div className="fixed w-full h-16 bg-black text-white z-20  ">
        <div className="flex justify-between  md:gap-5 items-center max-w-screen-xl mx-auto px-8 h-full">
          <div className="hidden lg:flex items-center">
            <ul className="flex ">
              {links.map(({ id, link, name }) => (
                <Link key={id} to={link}>
                  <li className="p-4 uppercase duration-300 hover:text-[#36b5d3] hover:scale-110 cursor-pointer">
                    {name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>

          <div className="flex items-center flex-row justify-center gap-2 ">
            {/* <BiBell className="text-2xl cursor-pointer hover:text-[#36b5d3] duration-300" /> */}

            <BiUserCircle
              onClick={handlerLogout}
              className="text-4xl cursor-pointer hover:text-[#36b5d3] duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>

      <div
        className={`fixed w-full  text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 ${
          isMenuShown
            ? "top-16 rounded-b-2xl bg-gray-900 opacity-95"
            : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link, name }) => (
            <Link
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              key={id}
            >
              <li className="p-4 uppercase cursor-pointer duration-300 hover:text-[#36b5d3]">
                {name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
