import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const GetFiles = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Listar Expedientes
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              alias eveniet molestias, eos facere voluptate rem modi iure! Sed
              ipsam ipsum et totam nesciunt quaerat fugit suscipit consequatur
              architecto eaque.
            </p>
          </div>

          <div className="flex ">
            <div className="p-4 w-[500px] mx-auto ">
              <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden shadow-[#36b5d3] shadow-sm">
                <h1 className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  Expediente #
                </h1>
                <div className="flex items-center gap-4 text-gray-600 mb-2">
                  <p className="font-bold">campo 1</p>
                  <p>valor </p>
                </div>
                <div className="flex items-center gap-4 text-gray-600 mb-2">
                  <p className="font-bold">campo 2</p>
                  <p>valor </p>
                </div>
                <div className="flex items-center gap-4 text-gray-600 mb-6">
                  <p className="font-bold">campo 3</p>
                  <p>valor </p>
                </div>
                <button className="flex items-center justify-between mx-auto text-white bg-gray-400 border-0 py-2 px-4 w-[200px] focus:outline-none hover:bg-gray-500 rounded">
                  Detalles
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetFiles;
