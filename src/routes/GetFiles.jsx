import React from "react";
import { TbListDetails } from "react-icons/tb";
import ProgressBar from "@/components/ProgressBar";

const GetFiles = () => {
  const data = [
    {
      id: 1,
      name: "Obra Recursiva",
      date: "2023",
      user: "Claudia Millan",
      percentage: "45",
    },
    {
      id: 2,
      name: "Prueba Obra",
      date: "2023",
      user: "Bryan Sañudo",
      percentage: "90",
    },
    {
      id: 3,
      name: "Obra ejemplo",
      date: "2023",
      user: "Claudia Millan",
      percentage: "45",
    },
    {
      id: 4,
      name: "Prueba licitacion",
      date: "2023",
      user: "Claudia Millan",
      percentage: "100",
    },
    {
      id: 5,
      name: "Licitacion obra",
      date: "2023",
      user: "Bryan Sañudo",
      percentage: "45",
    },
    {
      id: 6,
      name: "Obra Recursiva",
      date: "2023",
      user: "claudia Millan",
      percentage: "30",
    },
  ];

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-[#36b5d3]">
              Listar Expedientes
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              alias eveniet molestias, eos facere voluptate rem modi iure! Sed
              ipsam ipsum et totam nesciunt quaerat fugit suscipit consequatur
              architecto eaque.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8  items-center justify-center">
            {data.map((data) => (
              <div
                key={data.id}
                className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden shadow-gray-400 w-[full] shadow-md items-center "
              >
                <p className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                  <span className="mr-2">{data.name}</span>
                </p>

                <div className="overflow-x-auto">
                  <table className="table w-full">
                    {/* head */}

                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <td className="font-bold">Id</td>
                        <td>{data.id}</td>
                      </tr>
                      {/* row 2 */}
                      <tr className="">
                        <td className="font-bold">Quien cargo</td>
                        <td>{data.user}</td>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        <td className="font-bold">Ejercicio</td>
                        <td>{data.date}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-col text-center gap-2 mt-4">
                  {/* <ProgressBar progressPercentage={data.percentage} /> */}
                  <p className=" font-bold">Integracion Documental</p>
                  <progress
                    className="progress progress-info w-56 "
                    value={data.percentage}
                    max="100"
                  />
                  <span className="text-[#36b5d3] font-bold">
                    {data.percentage}%
                  </span>
                </div>

                <button
                  className="flex items-center justify-center gap-4 
                mt-4 text-white bg-black border-0 py-2 px-4 w-[130px] focus:outline-none  hover:scale-105 duration-300 rounded"
                >
                  Detalles
                  <TbListDetails />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GetFiles;
