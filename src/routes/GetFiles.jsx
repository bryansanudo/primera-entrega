import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProgressBar from "@/components/ProgressBar";

const GetFiles = () => {
  const data = [
    {
      id: 1,
      name: "Obra Recursiva",
      date: "27 Abril 2023",
      user: "Claudia Millan",
      percentage: "45",
    },
    {
      id: 2,
      name: "Prueba Obra",
      date: "27 marzo 2023",
      user: "Bryan",
      percentage: "90",
    },
    {
      id: 3,
      name: "obra ejemplo",
      date: "27 Abril 2023",
      user: "Claudia Millan",
      percentage: "45",
    },
    {
      id: 4,
      name: "prueba licitacion",
      date: "27 Abril 2023",
      user: "Claudia Millan",
      percentage: "100",
    },
    {
      id: 5,
      name: "licitacion obra",
      date: "27 Abril 2023",
      user: "bryan",
      percentage: "45",
    },
    {
      id: 6,
      name: "Obra Recursiva",
      date: "27 Abril 2023",
      user: "andres",
      percentage: "30",
    },
  ];

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

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8  ">
            {data.map((data) => (
              <div className="md:w-[400px] w-[300px] mx-auto  ">
                <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden shadow-[#36b5d3] shadow-sm">
                  <p className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                    <span className="mr-2">{data.name}</span>
                    <span>{data.id}</span>
                  </p>

                  <div className="flex items-center gap-4 text-gray-600 mb-2">
                    <p className="font-bold">Quien cargo</p>
                    <p>{data.user}</p>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 mb-2">
                    <p className="font-bold">Fecha de creación</p>
                    <p>{data.date}</p>
                  </div>

                  <div>
                    <ProgressBar
                      progressPercentage={data.percentage}
                      progressName={"Intregracion Documental"}
                    />
                  </div>

                  <button className="flex items-center justify-between mx-auto text-white bg-gray-400 border-0 py-2 px-4 w-[200px] focus:outline-none hover:bg-gray-500 rounded">
                    Detalles
                    <AiOutlineArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GetFiles;
