import React from "react";
import { CiLocationOn } from "react-icons/ci";


export default function Details() {
  return (
    <div>
      <section className="grid cols-1 lg:grid-cols-2 items-center gap-30 font-poppins  ">
        <figure>
          <img
            src="https://www.omegawatches.com/media/wysiwyg/AS11-40-5903HR-1200_2.jpg"
            className="w-full lg:w-[600px]"
          />
        </figure>
        <div className="w-full grid gap-10 text-center lg:text-left">
          <h1 className="text-2xl font-inter"> Error 404</h1>
          <h1 className="text-5xl font-bold text-red-800 uppercase font-moonDance">We’re Sorry,</h1>
          <p className="text-gray-700 font-robotMono">We looked everywhere but the page you requested was <br/> not found.</p>
          <button className="mx-auto lg:mx-0 font-outfit w-fit border bg-opaque px-10 py-3 bg-red-800 text-white hover:bg-white hover:text-black">
            HOME PAGE
          </button>
        </div>
      </section>

      <section>
        <h1 className="text-3xl text-red-800 text-center py-15  font-headline  ">
          OUR SUGGETIONS
        </h1>
        <div className="flex justify-center items-center gap-5">

          <div className="shadow-xl">
            <figure>
              <img
                src="https://www.omegawatches.com/media/wysiwyg/404-Men.jpeg"
                className="w-[800px] lg:w-75 hover:scale-98 duration-300 ease-in-out"
              />
            </figure>
            <div className="grid  justify-center gap-5 my-10">
              <p className=" font-semibold text-red-700 font-robotMono"> MEN'S SELECTION</p>
              <button className="w-fit shadow-lg mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 font-inter">
                See More
              </button>
            </div>
          </div>

          <div className="shadow-xl">
            <figure>
              <img
                src="https://www.omegawatches.com/media/wysiwyg/404-women.jpeg"
                className="w-[800px] lg:w-75 hover:scale-98 duration-300 ease-in-out"
              />
            </figure>
            <div className="grid  justify-center gap-5 my-10">
              <p className=" font-semibold text-red-700 font-robotMono"> MEN'S SELECTION</p>
              <button className="w-fit shadow-lg mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                See More
              </button>
            </div>
          </div>

          <div className="shadow-xl">
            <figure>
              <img
                src="https://www.omegawatches.com/media/wysiwyg/404-Collection.jpeg"
                className="w-[800px] lg:w-75 hover:scale-98 duration-300 ease-in-out"
              />
            </figure>
            <div className="grid  justify-center gap-5 my-10">
              <p className=" font-semibold text-red-700 font-robotMono"> MEN'S SELECTION</p>
              <button className="w-fit shadow-lg mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                See More
              </button>
            </div>
          </div>

        </div>
        <div className="grid justify-center py-15">
          <button className="w-fit font-inter border bg-opaque px-8 py-3 items-center bg-red-800 text-white hover:bg-white hover:text-black">
            MORE SUGGESTIONS
          </button>
        </div>
      </section>

      <section className="grid cols-1 lg:grid-cols-2 items-center gap-30 lg:mx-35 bg-gray-200 ">
        <figure>
          <img
            src="https://www.omegawatches.com/static/version1784264796/frontend/Omega/default/default/Reflet_PageBuilder/images/find-a-store/boutique-desktop.jpeg"
            className="w-full "
          />
        </figure>
        <div className="w-full lg:w-100 grid gap-10 justify-center items-center">
          <CiLocationOn  className="text-2xl"/>
          <p className="text-5xl text-gray-600"> STORE <br/>LOCATOR</p>
          <button className="w-full font-inter border bg-opaque px-10 py-3 bg-red-700 text-white hover:bg-white hover:text-black">
            FIND A STORE
          </button>
        </div>
      </section>
    </div>
  );
}
