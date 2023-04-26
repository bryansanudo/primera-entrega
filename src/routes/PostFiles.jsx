import React from "react";

const PostFiles = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-40 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                Crear Expedientes
              </h1>
              <p className="max-w-xl text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti tempore temporibus aliquid nulla, nisi mollitia totam.
                Sunt, exercitationem. Officiis, cum hic. Id doloremque neque
                maiores quos itaque ipsa sapiente facere.
              </p>

              <div className="mt-8">
                <p className="text-2xl font-bold text-[#36b5d3]">
                  Informacion relevante
                </p>

                <address className="mt-2 not-italic">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Veniam reprehenderit, animi veritatis velit labore obcaecati,
                  quas doloribus magni maiores illum doloremque nihil ea
                  repellat ratione numquam sint. In, tempore maiores.
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 ">
              <div className="flex flex-col gap-4">
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Campo 1"
                  type="text"
                  id="name"
                />

                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Campo 2"
                  type="text"
                  id="name"
                />

                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Campo 3"
                  type="text"
                  id="name"
                />
              </div>
              <div className="pt-10 text-center">
                <button className="inline-block w-full rounded-lg bg-[#36b5d3] px-5 py-3 font-medium text-white sm:w-auto">
                  Crear Expediente
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostFiles;
