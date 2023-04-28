import React from "react";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { HiOutlineArrowSmDown } from "react-icons/hi";

const PostFiles = () => {
  return (
    <>
      <form className="mx-10 pt-40">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nombre de la obra
          </label>
          <input
            type="text"
            id="nameFile"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Ejercicio
          </label>
          <input
            type="text"
            id="exercise"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Numero de obra
          </label>
          <input
            type="text"
            id="numberFile"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="mb-6">
            <label className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Monto Asignado
            </label>
            <input
              type="text"
              id="assignedAmount"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-6">
            <label className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Monto contratado
            </label>
            <input
              type="text"
              id="contractedAmoutn"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-6">
            <label className="text-center block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Monto Ejercido
            </label>
            <input
              type="password"
              id="exercisedAmount"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="mb-6">
            <div className="dropdown dropdown-bottom flex items-center justify-center">
              <label
                tabIndex={0}
                className="block cursor-pointer  text-sm font-medium text-gray-900 dark:text-white"
              >
                Modalidad
              </label>
              <label className="swap ">
                <input type="checkbox" />
                <HiOutlineArrowSmDown />
                {/*  <HiOutlineArrowSmUp className="swap-off" /> */}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu text-center shadow bg-base-100 rounded-box w-full"
              >
                <li>
                  <div
                    className="shadow-sm bg-gray-50 hover:bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  >
                    Admin. Directa
                  </div>
                </li>
                <li>
                  <div
                    className="shadow-sm bg-gray-50 border hover:bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  >
                    Contrato
                  </div>
                </li>
                <li>
                  <div
                    className="shadow-sm bg-gray-50 border hover:bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  >
                    Mixto
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-6">
            <div className="dropdown dropdown-bottom flex items-center justify-center">
              <label
                tabIndex={0}
                className="block cursor-pointer  text-sm font-medium text-gray-900 dark:text-white"
              >
                Tipo de adjudicación
              </label>
              <label className="swap ">
                <input type="checkbox" />
                <HiOutlineArrowSmDown />
                {/*  <HiOutlineArrowSmUp className="swap-off" /> */}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu text-center shadow bg-base-100 rounded-box w-full"
              >
                <li>
                  <div
                    className="shadow-sm bg-gray-50 hover:bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  >
                    Invitacion Restringida a 5 proveedores
                  </div>
                </li>
                <li>
                  <div
                    className="shadow-sm bg-gray-50 border hover:bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  >
                    Invitacion Restringida a 3 proveedores
                  </div>
                </li>
                <li>
                  <div
                    className="shadow-sm bg-gray-50 border hover:bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  >
                    Licitación Pública
                  </div>
                </li>
                <li>
                  <div
                    className="shadow-sm bg-gray-50 border hover:bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  >
                    Adjudicación Directa
                  </div>
                </li>
              </ul>
            </div>

            {/* <input
              type="password"
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            /> */}
          </div>
          <div className="mb-6">
            <div className="dropdown dropdown-bottom flex items-center justify-center">
              <label
                tabIndex={0}
                className="block cursor-pointer  text-sm font-medium text-gray-900 dark:text-white"
              >
                Tipo de contrato
              </label>
              <label className="swap ">
                <input type="checkbox" />
                <HiOutlineArrowSmDown />
                {/*  <HiOutlineArrowSmUp className="swap-off" /> */}
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu text-center shadow bg-base-100 rounded-box w-full"
              >
                <li>
                  <div
                    className="shadow-sm bg-gray-50 hover:bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  >
                    De Obra
                  </div>
                </li>
                <li>
                  <div
                    className="shadow-sm bg-gray-50 border hover:bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  >
                    Adquisición de Materiales
                  </div>
                </li>
                <li>
                  <div
                    className="shadow-sm bg-gray-50 border hover:bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  >
                    Herramienta o Equipos
                  </div>
                </li>
                <li>
                  <div
                    className="shadow-sm bg-gray-50 border hover:bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  >
                    Renta de Maquinaria
                  </div>
                </li>
                <li>
                  <div
                    className="shadow-sm bg-gray-50 border hover:bg-gray-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    required
                  >
                    Otro
                  </div>
                </li>
              </ul>
            </div>

            {/* <input
              type="password"
              id="repeat-password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            /> */}
          </div>
        </div>

        {/* <div className="flex items-start mb-6 mt-40">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Esta seguro de crear expediente en la base de datos?
          </label>
        </div> */}
        <button
          type="submit"
          className="mt-60 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Crear Expediente
        </button>
      </form>
    </>
  );
};

export default PostFiles;
