import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import Footer from "../Common/Footer";
import { MdOutlineFilterVintage } from "react-icons/md";
import { Link } from "react-router";

export default function AquaTerra() {
  return (
    <div>
      <section className="font-poppins">
        <div className="max-w-[1320px] text-center pt-40 pb-20 lg:py-15">
          <p className="font-moonDance font-semibold text-xl">SEAMASTER</p>
          <p className="text-5xl  text-red-800 font-robotMono">
            AQUA TERRA 150 M{" "}
          </p>
        </div>

         {/* Resposive for sm only */}
         <section className=" lg:hidden md:block sm:flex flex col justify-center sticky top-18">
            <ul className="flex gap-5 text-gray-700 ">
              <li className=" px-15 py-2 flex items-center gap-3 border border-gray-500 rounded-full bg-gray-100 text-sm">
                <MdOutlineFilterVintage className="text-xl" /> FILTER
              </li>
              <li className=" px-10 py-2 flex items-center gap-3 border border-gray-500 rounded-full bg-gray-100 text-sm ">
                RELEVANCE <MdOutlineExpandMore className="text-xl" />
              </li>
            </ul>
         </section> 

        <section>
          <div className="hidden lg:flex justify-between p-15">
            <ul className="flex gap-5 uppercase">
              <li className="w-fit px-5 py-2 flex items-center gap-3 rounded-full bg-gray-100 text-sm cursor-pointer hover:bg-gray-300">
                {" "}
                collection <MdOutlineExpandMore />
              </li>
              <li className="w-fit px-5 py-2 flex items-center gap-3 rounded-full bg-gray-100 text-sm cursor-pointer hover:bg-gray-300">
                {" "}
                collection <MdOutlineExpandMore />
              </li>
              <li className="w-fit px-5 py-2 flex items-center gap-3 rounded-full bg-gray-100 text-sm cursor-pointer hover:bg-gray-300">
                {" "}
                collection <MdOutlineExpandMore />
              </li>
              <li className="w-fit px-5 py-2 flex items-center gap-3 rounded-full bg-gray-100 text-sm cursor-pointer hover:bg-gray-300">
                {" "}
                collection <MdOutlineExpandMore />
              </li>
              <li className="w-fit px-5 py-2 flex items-center gap-3 rounded-full bg-gray-100 text-sm cursor-pointer hover:bg-gray-300">
                {" "}
                collection <MdOutlineExpandMore />
              </li>
              <li className="w-fit px-5 py-2 flex items-center gap-3 rounded-full bg-gray-100 text-sm cursor-pointer hover:bg-gray-300">
                {" "}
                collection <MdOutlineExpandMore />
              </li>
            </ul>
            <ul className="uppercase">
              <li className="w-fit px-5 py-2 flex items-center gap-3 rounded-full bg-gray-100 text-sm cursor-pointer hover:bg-gray-300">
                {" "}
                collection <MdOutlineExpandMore />
              </li>
            </ul>
          </div>

          <p className="text-sm text-center lg:text-left mx-10 my-5">
            <span className="text-red-600 mr-2">106</span> WATCHES
          </p>

        </section>

        <section className="grid grid-cols-2  lg:grid-cols-5 gap-4 px-2 ">
          <Link to='/details'>
          <div className=" shadow-lg  w-full h-full p-2 hover:border border-gray-200">
            <figure className="bg-gray-100 ">
              <img
                src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22010412101002-ceac31.png?w=230"
                className=" p-7"
              />
            </figure>
            <div className="grid gap-3 my-5 text-center">
              <p className="text-[12px]">SEAMASTER DIVER 300M </p>
              <p className="font-lighter text-[13px] font-robotMono">
                44 mm , steel on NATO strap
              </p>
              
              <button className="w-fit font-inter text-shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                Details
              </button>
            
            </div>
          </div>
          </Link>

          <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
            <figure className="bg-gray-100 ">
              <img
                src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22012412102002-d02436.png?w=460"
                className=" p-7"
              />
            </figure>
            <div className="grid gap-3 my-5 text-center">
              <p className="text-[12px]">SEAMASTER DIVER 300M </p>
              <p className="font-lighter text-[13px] font-robotMono">
                44 mm , steel on NATO strap
              </p>
              <button className="w-fit font-inter text-shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                Details
              </button>
            </div>
          </div>

          <div className="hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
            <figure className="bg-gray-100 ">
              <img
                src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22010412102001-a9f077.png?w=210 "
                className=" p-7"
              />
            </figure>
            <div className="grid gap-3 my-5 text-center">
              <p className="text-[12px]">SEAMASTER DIVER 300M </p>
              <p className="font-lighter text-[13px] font-robotMono">
                44 mm , steel on NATO strap
              </p>
              <button className="w-fit font-inter text-shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                Details
              </button>
            </div>
          </div>

          <div className=" hidden lg:block  shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
            <figure className="bg-gray-100 ">
              <img
                src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22013412110001-d7ae20.png?w=420"
                className=" p-7"
              />
            </figure>
            <div className="grid gap-3 my-5 text-center">
              <p className="text-[12px]">SEAMASTER DIVER 300M </p>
              <p className="font-lighter text-[13px] font-robotMono">
                44 mm , steel on NATO strap
              </p>
              <button className="w-fit font-inter text-shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                Details
              </button>
            </div>
          </div>

          <div className=" hidden lg:block  shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
            <figure className="bg-gray-100 ">
              <img
                src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22010412110001-bacbaa.png?w=460"
                className=" p-7"
              />
            </figure>
            <div className="grid gap-3 my-5 text-center">
              <p className="text-[12px]">SEAMASTER DIVER 300M </p>
              <p className="font-lighter text-[13px] font-robotMono">
                44 mm , steel on NATO strap
              </p>
              <button className="w-fit font-inter text-shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                Details
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className=" flex justify-between items-center mx-5 my-10">
            <div className="hidden lg:block  shadow-lg w-[260px] h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22032412103001-d8a37b.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className=" w-fit font-inter text-shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>

            <div className="hidden lg:block  shadow-lg w-[260px] h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22010412103006-5059c4.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit font-inter text-shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>

            <div>
              <figure>
                <img
                  src="https://www.omegawatches.com/media/wysiwyg/Img_PushBlock_family_large.jpg"
                  className=" w-full h-full lg:w-[400px] h-[450px]"
                />
              </figure>
            </div>

            <div className="hidden lg:block w-75">
              <h2 className="text-lg font-bold text-gray-700 font-headline mb-4 ">
                {" "}
                Seamaster Collection in Summer Blue
              </h2>
              <p className="text-[14px] font-robotMono">
                To celebrate oceangoing icon, OMEGA has produced a collection of
                watches with dials in various layers of Summer Blue. A striking
                tone reminiscent of a perfect day on a boundless sea.
              </p>
              <button className="w-fit font-inter shadow-lg my-10 mx-auto text-sm font-semibold">
                DISCOVER THE UNIVERSE
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 px-2">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22012412103007-f0214b.png?w=420"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className=" w-fit font-inter text-shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22013412103003-24d20c.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className=" w-fit font-inter text-shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22010412103004-d76c64.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className=" w-fit font-inter text-shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22012412103009-d3a730.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className=" w-fit font-inter text-smshadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>

            <div className=" hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22012412103008-2007a6.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className=" w-fit font-inter text-sm shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22010412103005-e57760.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className=" w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22012412101001-eec16d.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className=" w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22010412101001-4c58ba.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className=" w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22020412106001-3e61b9.png?w=230"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className=" w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>

            <div className="hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22052412103001-5d8b30.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className=" w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center gap-5 mx-5 my-10">
            <div>
              <figure>
                <img
                  src="https://www.omegawatches.com/media/wysiwyg/22050302008001-push_at_ladies-destop.jpg"
                  className="w-full h-full lg:w-[500px] h-[450px] "
                />
              </figure>
            </div>

            <div className=" hidden lg:block w-75">
              <h2 className="text-lg font-bold text-gray-700 font-headline mb-4">
                {" "}
                LADIES' SELECTION
              </h2>
              <p className="text-[14px] font-robotMono">
                Discover the new collection that includes many stunning models
                in a range of colours and materials. Most importantly, each one
                of these Master Chronometers has been designed with simplicity,
                comfort and excellence in mind.
              </p>
              <button className="w-fit font-inter shadow-lg my-10 mx-auto text-sm font-semibold">
                DISCOVER THE UNIVERSE
              </button>
            </div>

            <div className="hidden lg:block shadow-lg w-[260px] h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22022412102001-3032bd.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  41 mm, steel ‑ Sedna™ gold on rubber strap
                </p>
                <button className="w-fit font-inter shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className="hidden lg:block shadow-lg w-[260px] h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22023412102001-342273.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  41 mm, steel ‑ Sedna™ gold on rubber strap
                </p>
                <button className="w-fit font-inter shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22020412102001-7e546e.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  41 mm, steel ‑ Sedna™ gold on rubber strap
                </p>
                <button className=" w-fit font-inter shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22020412101001-b029e6.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  41 mm, steel ‑ Sedna™ gold on rubber strap
                </p>
                <button className=" w-fit font-inter shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22052412110001-3fb7e5.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  41 mm, steel ‑ Sedna™ gold on rubber strap
                </p>
                <button className=" w-fit font-inter shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-41-mm-22050412110001-17478c.png?w=230"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  41 mm, steel ‑ Sedna™ gold on rubber strap
                </p>
                <button className=" w-fit font-inter shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>

            <div className=" hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22010382001004-ffa88f.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  41 mm, steel ‑ Sedna™ gold on rubber strap
                </p>
                <button className=" w-fit font-inter shadow-lg my-10 mx-auto  text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-[260px] h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22010382003004-8b0582.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-[260px] h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-38-mm-22010382003003-7246b9.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-[260px] h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22032382003001-f8e304.png?w=210 "
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-[260px] h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22010382003005-de931b.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" hidden lg:block shadow-lg w-[260px] h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-38-mm-22020382002002-a1bec9.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mx-5 my-10">
            <div className=" hidden lg:block shadow-lg w-[260px] h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22020382010002-08233f.png?w=210"
                  className=" p-7"
                />
              </figure>

              <div className="hidden lg:block grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  41 mm, steel ‑ Sedna™ gold on rubber strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className="hidden lg:block shadow-lg w-[260px] h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-38-mm-22020382009001-fea177.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  41 mm, steel ‑ Sedna™ gold on rubber strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>

            <div>
              <figure>
                <img
                  src="https://www.omegawatches.com/media/wysiwyg/WT_large.jpg"
                  className="w-full h-full lg:w-[450px] h-[500px]"
                />
              </figure>
            </div>

            <div className=" hidden lg:block w-75">
              <h2 className="text-lg font-bold text-gray-700 font-headline mb-4">
                {" "}
                WORLDTIMER
              </h2>
              <p className="text-[13px] font-robotMono">
                Tour the globe with OMEGA’s full Worldtimer collection. As well
                as mapping the continents, each model tracks the hours in a
                variety of destinations.
              </p>
              <button className="w-fit shadow-lg my-10 mx-auto text-sm font-semibold">
                DISCOVER THE UNIVERSE
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-38-mm-22010382009001-6d4cca.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-38-mm-22010382010005-427cb6.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-38-mm-22010382010004-b66580.png?w=210 "
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-38-mm-22010382010002-22a97f.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className="hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-38-mm-22053382010001-7db82d.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-38-mm-22010382012001-447171.png?w=420"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-38-mm-22010382013003-21e50e.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-38-mm-22055382009001-07eb57.png?w=210 "
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-38-mm-22050382010001-a30aa7.png?w=420"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className="hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-38-mm-22050382008001-506765.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22050382003001-4f0d48.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22012382010001-34d605.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22010382010003-0a955c.png?w=210 "
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22012382003001-4a7ca6.png?w=230"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className="hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22010382003001-79d936.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mx-5 my-10">
            <div className="hidden lg:block shadow-lg w-[260px] h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22012382002001-9385df.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  41 mm, steel ‑ Sedna™ gold on rubber strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div>
              <figure>
                <img
                  src="https://www.omegawatches.com/media/wysiwyg/Push-catalog-SE-AT-SmallSeconds-800x640.jpg"
                  className=" w-full h-full lg:w-[440px] h-[450px]"
                />
              </figure>
            </div>

            <div className=" hidden lg:block w-75">
              <h2 className="text-lg font-bold text-gray-700 font-headline mb-4">
                {" "}
                SMALL SECONDS
              </h2>
              <p className="text-[13px] font-robotMono">
                Discover OMEGA’s eye-catching collection of Aqua Terra
                timepieces with small seconds at 6 o’clock. Ocean-inspired
                watches in 38 and 41 mm with striking subdials set on equally
                beautiful dials, in a range of exceptional materials including
                OMEGA’s own 18K Sedna™ gold.
              </p>
              <button className="w-fit shadow-lg my-10 mx-auto text-[12px] font-semibold">
                DISCOVER THE UNIVERSE
              </button>
            </div>

            <div className=" hidden lg:block shadow-lg w-[260px] h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22010382002001-001c09.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  41 mm, steel ‑ Sedna™ gold on rubber strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-small-seconds-41-mm-22012412103005-934869.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-small-seconds-41-mm-22010412102004-563830.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-small-seconds-41-mm-22022412103001-bdacfe.png?w=460 "
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-small-seconds-41-mm-22052412102001-2baf29.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22010382003001-79d936.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-small-seconds-41-mm-22052412103002-e913cc.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-small-seconds-38-mm-22023382060001-04e3c9.png?w=230"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22010382010003-0a955c.png?w=210 "
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-small-seconds-38-mm-22058382055002-89b8a6.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className="hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22010382003001-79d936.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-small-seconds-38-mm-22055382099001-08de71.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22058382099007-634f03.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22058382099008-702b99.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22012382003001-4a7ca6.png?w=230"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className="hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22010382003001-79d936.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-34-mm-22010342001001-8bd763.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-34-mm-22010342003002-6833ca.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-34-mm-22010342010001-4ea479.png?w=420"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22012382003001-4a7ca6.png?w=230"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className="hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-34-mm-22010342010003-0d43cc.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-34-mm-22055342060001-f65e54.png?w=230"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-34-mm-22010342003002-6833ca.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-34-mm-22010342010001-4ea479.png?w=420"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22012382003001-4a7ca6.png?w=230"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className="hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-34-mm-22020342010002-8d47b9.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-34-mm-22010342001001-8bd763.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-34-mm-22010342003002-6833ca.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-34-mm-22010342010001-4ea479.png?w=420"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22012382003001-4a7ca6.png?w=230"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className="hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-34-mm-22010342010003-0d43cc.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-34-mm-22010342001001-8bd763.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-34-mm-22010342003002-6833ca.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-34-mm-22010342010001-4ea479.png?w=420"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22012382003001-4a7ca6.png?w=230"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className="hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-34-mm-22010342010003-0d43cc.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-small-seconds-41-mm-22012412103005-934869.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-small-seconds-41-mm-22010412102004-563830.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-small-seconds-41-mm-22022412103001-bdacfe.png?w=460 "
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-small-seconds-41-mm-22052412102001-2baf29.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22010382003001-79d936.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-30-mm-22020302002001-f670f2.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-30-mm-22020302010002-f54934.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-30-mm-22020302063001-0e6761.png?w=230"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-38-mm-22012382003001-4a7ca6.png?w=230"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className="hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-30-mm-22050302008001-413234.png?w=210"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 p-5">
            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-30-mm-22055302061001-77f333.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className=" shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-30-mm-22050302008001-413234.png?w=460"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>

            <div className="hidden lg:block shadow-lg w-full h-full p-2 hover:border border-gray-200 ">
              <figure className="bg-gray-100 ">
                <img
                  src="https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-aqua-terra-150m-co-axial-master-chronometer-30-mm-22055302060001-521d20.png?w=230"
                  className=" p-7"
                />
              </figure>
              <div className="grid gap-3 my-5 text-center">
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <button className="w-fit shadow-lg my-10 mx-auto text-[14px] px-2 hover:text-red-600 hover:border-b border-red-600 ">
                  Details
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-15 text-center border-b-1 border-gray-500">
          <button className="border bg-opaque font-robotMono p-2 hover:bg-red-600 hover:text-white">
            LOAD MORE
          </button>
        </section>

        <section className="max-w-1320px mx-10">
          <div className="grid gap-3 my-5 text-center">
            <p className="text-xl font- text-gray-800 uppercase font-headline">
              Seamaster - Aqua Terra 150M{" "}
            </p>
            <p className="font-lighter text-gray-600 font-robotMono">
              The Seamaster Aqua Terra 150M is a tribute to OMEGA’s maritime
              heritage, which has been a part of the brand since its first dive
              watch was released in 1932. The collection achieves the perfect
              balance between a sophisticated dress watch and the rugged ocean
              spirit of a sports watch.
            </p>
            <button className="w-fit font-outfit text-xl shadow-lg my-10 mx-auto px-2 hover:text-red-600 hover:border-b border-red-600">
              Read More
            </button>
          </div>
        </section>
      </section>
    </div>
  );
}
