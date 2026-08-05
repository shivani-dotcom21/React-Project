import React from "react";
import { MdExpandMore } from "react-icons/md";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <>
      <section className="font-poppins">
        <section className="relative w-full h-screen overflow-hidden">
          {/* 1. Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          >
            <source
              src="https://www.omegawatches.com/media/wysiwyg/video/PP-007-First-Light-videoLoop-735x510_1.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute bottom-35 left-25 text-white z-20 lg:top-[30rem] lg:left-20 lg:bottom-auto">
            <p className="text-sm font-semibold tracking-widest">SEAMASTER</p>
            <p className="text-3xl lg:text-5xl my-2 lg:font-bold">
              007 FIRST LIGHT
            </p>
            <button className="border border-white bg-black/40 px-4 py-2 hover:bg-red-600 transition">
              DISCOVER THE WATCHES
            </button>
          </div>
        </section>

        <section className="relative w-full h-screen overflow-hidden">
          <figure>
            <img src="https://www.omegawatches.com/media/wysiwyg/SP76-Moonwatch-desktop-small.jpg?w=2560" />
          </figure>
          <div className="hidden lg:block w-75 absolute bottom-35 left-25 text-white z-20 top-[30rem] left-20 bottom-auto ">
            <p className="text-xl font-headline">ICONIC SINCE 1957</p>
            <p className="text-3xl lg:text-5xl my-5 robotMono">
              MOONWATCH PROFESSIONAL
            </p>
            <button className="border text-xl border-white bg-transparent px-5 py-3 hover:bg-red-600 transition">
              DISCOVER THE WATCHES
            </button>
          </div>
        </section>

        <section className="bg-gray-100 w-full h-[850px] ">
          <div className="grid gap-5 justify-center pt-10">
            <h3 className=" text-lg text-red-600 mx-auto">APOLLO 13</h3>
            <h1 className="text-4xl font-bold font-moonDance ">
              A SUCCESSFULL FAILURE{" "}
            </h1>
          </div>

          {/* Responsive sm  */}
          <div className="relative flex my-20">
            <div className="lg:hidden sm:block">
              <figure className=" absolute top-40 left-30">
                <img
                  src="https://www.omegawatches.com/static/version1784264796/frontend/Omega/default/default/Reflet_PageBuilder/images/ma13/step-1-1.jpg"
                  className="w-100 h-fit"
                />
              </figure>
              <figure className="absolute top top-10 right-20 border-5 border-white">
                <img
                  src="https://www.omegawatches.com/static/version1784264796/frontend/Omega/default/default/Reflet_PageBuilder/images/ma13/step-1-2.jpg"
                  className="w-[250px] h-fit"
                />
              </figure>
              <figure className=" absolute top-30 left-20  border-5 z-999 border-white">
                <img
                  src="https://www.omegawatches.com/static/version1784264796/frontend/Omega/default/default/Reflet_PageBuilder/images/ma13/step-1-4.jpg"
                  className="w-[250px] h-fit"
                />
              </figure>
              <video
                class=" absolute w-75  right-32 top-65 h-fit border-5 border-white"
                controls
              >
                <source
                  src="https://www.omegawatches.com/static/version1784264796/frontend/Omega/default/default/Reflet_PageBuilder/images/ma13/step-1-3.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div>
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              // autoplay={{ delay: 2000 }}
              loop={true}
            >
              <SwiperSlide>
                <div className="relative flex justify-between mx-40  items-center  ">
                  <div className="hidden lg:block w-100">
                    <figure className=" absolute top-20 left-10 ">
                      <img
                        src="https://www.omegawatches.com/static/version1784264796/frontend/Omega/default/default/Reflet_PageBuilder/images/ma13/step-1-1.jpg"
                        className=" w-[550px] h-full"
                      />
                    </figure>
                    <figure className="absolute top-0 right-185  border-5 border-white">
                      <img
                        src="https://www.omegawatches.com/static/version1784264796/frontend/Omega/default/default/Reflet_PageBuilder/images/ma13/step-1-2.jpg"
                        className="w-[450px] h-full"
                      />
                    </figure>
                    <figure className=" absolute top-10 border-5 z-999 border-white">
                      <img
                        src="https://www.omegawatches.com/static/version1784264796/frontend/Omega/default/default/Reflet_PageBuilder/images/ma13/step-1-4.jpg"
                        className=" w-75 h-fit"
                      />
                    </figure>
                    <video
                      class=" absolute top-90 left-100 w-75 h-fit border-5 border-white"
                      controls
                    >
                      <source
                        src="https://www.omegawatches.com/static/version1784264796/frontend/Omega/default/default/Reflet_PageBuilder/images/ma13/step-1-3.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>

                  <div className=" hidden lg:block w-100 ">
                    <div>
                      <h1 className="text-3xl text-red-700 my-5 font-bold font-moonDance">
                        HEADING FOR THE MOON
                      </h1>
                      <p className="font-robotMono">
                        On April 11 1970, NASA's third crewed lunar landing,
                        Apollo 13 set out for the Fra Mauro highlands to
                        continue humankind's exploration of the Moon.
                      </p>
                    </div>
                    <div className="flex items-center gap-5 mt-50">
                      <IoIosArrowBack className="hover: w-[45px] h-[45px] p-3 hover:bg-red-600 hover:text-white" />{" "}
                      <IoIosArrowForward className="hover:border-1 w-[45px] h-[45px] p-3 hover:bg-red-600 hover:text-white" />
                      <p> 1 / 5</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative flex justify-between items-center mx-50 ">
                  <div className="hidden lg:block">
                    <figure className=" absolute top-15 left-30 ">
                      <img
                        src="https://www.omegawatches.com/static/version1785904310/frontend/Omega/default/default/Reflet_PageBuilder/images/ma13/step-2-1.jpg"
                        className=" w-[500px] h-[550px]"
                      />
                    </figure>
                    <figure className="absolute top-0 right-185  border-5 border-white">
                      <img
                        src="https://www.omegawatches.com/static/version1785904310/frontend/Omega/default/default/Reflet_PageBuilder/images/ma13/step-2-2.jpg"
                        className="w-[450px] h-full"
                      />
                    </figure>
                    <figure className=" absolute top-10 border-5 z-999 border-white">
                      <img
                        src="https://www.omegawatches.com/static/version1785904310/frontend/Omega/default/default/Reflet_PageBuilder/images/ma13/step-2-4.jpg"
                        className=" w-75 h-fit"
                      />
                    </figure>
                    <video
                      class=" absolute top-80 left-100 w-75 h-fit border-5 border-white"
                      controls
                    >
                      <source
                        src="https://www.omegawatches.com/static/version1785904310/frontend/Omega/default/default/Reflet_PageBuilder/images/ma13/step-2-3.jpg"
                        type="video/mp4"
                      />
                    </video>
                  </div>

                  <div className=" hidden lg:block w-100 mt-20">
                    <div>
                      <h1 className="text-3xl text-red-700 my-5 font-bold font-moonDance">
                        HEADING FOR THE MOON
                      </h1>
                      <p className="font-robotMono">
                        On April 11 1970, NASA's third crewed lunar landing,
                        Apollo 13 set out for the Fra Mauro highlands to
                        continue humankind's exploration of the Moon.
                      </p>
                    </div>
                    <div className="flex items-center gap-5 mt-50">
                      <IoIosArrowBack className="hover: w-[45px] h-[45px] p-3 hover:bg-red-600 hover:text-white" />{" "}
                      <IoIosArrowForward className="hover:border-1 w-[45px] h-[45px] p-3 hover:bg-red-600 hover:text-white" />
                      <p> 1 / 5</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <section className="grid justify-center text-center m-20 my-40 ">
          <div>
            <h1 className="text-5xl text-red-800 font-robotMono">
              Aqua Terra in Black
            </h1>
            <p className="my-10 font-robotMono">
              Presented in three sizes, this classic Seamaster collection is
              crafted with timeless black dials featuring a <br />
              modern lacquered finish.{" "}
            </p>
            <button className="border bg-opaque p-2 hover:bg-red-600 hover:text-white">
              DISCOVER THE COLLECTION
            </button>
          </div>
        </section>

        <div className="max-w-[1320px] lg:flex col  lg:justify-center gap-10 sm:grid cols-1 mx-20 my-20">
          <figure className="py-10">
            <img
              src="https://www.omegawatches.com/media/wysiwyg/AT-black-push-left.jpg"
              className="w-full lg:w-[500px] h-full pt-10"
            />
          </figure>
          <div>
            <video class="w-full lg:w-[500px] h-fit rounded-base" controls>
              <source
                src="https://www.omegawatches.com/media/wysiwyg/video/SE_Adv_ATBlack_ProductMovie_20s_16x9_H264_web-2.mp4 "
                type="video/mp4"
              />
            </video>
            <div className="flex justify-center lg:flex items-center my-10">
              <figure>
                <img
                  src="https://www.omegawatches.com/media/catalog/product/cache/b4f56650fe45c45273f632655302c4af/o/m/omega-seamaster-aqua-terra-shades-co-axial-master-chronometer-38-mm-22010382003003-7246b9.png "
                  className="w-[250px]"
                />
              </figure>
              <div className="grid gap-2">
                <p>
                  <span className="rounded-full bg-gray-200 mx-2 text-[13px]">
                    New
                  </span>
                  <span className="rounded-full bg-gray-200  px-2 text-[12px]">
                    <span className=" text-red-600 italic"> OOT</span>
                    <span className=" text-red-600"> FIRST LIGHT</span>
                  </span>
                </p>
                <p className="text-[12px]">SEAMASTER DIVER 300M </p>
                <p className="font-lighter text-[13px] font-robotMono">
                  44 mm , steel on NATO strap
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <button className="inline shadow-lg">Details</button>
                </motion.div>
                <div className="flex items-center gap-5 my-5 pt-30">
                  <IoIosArrowBack className="hover:border-1 w-[35px] h-[35px] p-2" />
                  <IoIosArrowForward className="hover:border-1 w-[35px] h-[35px] p-2" />
                  <p> 1 / 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="grid cols-1 lg:grid-cols-2 items-center justify-center gap-30 text-center lg:m-20 ">
          <div className="w-full lg:w-75">
            <h1 className="text-5xl text-red-800 font-headline">
              Forever Timeless
            </h1>
            <p className="my-5 font-robotMono">
              The legacy of the OMEGA Constellation is yours to embrace.
              Discover the modern era of this enduring collection with a variety
              of colours, sizes, and signature designs.
            </p>
            <button className="border bg-opaque p-2 hover:bg-red-600 hover:text-white">
              DISCOVER THE COLLECTION
            </button>
          </div>
          <figure>
            <img
              src="https://www.omegawatches.com/media/wysiwyg/Push_home_Const_13110286060002_adv_1.jpg"
              className="w-full lg:w-[500px]"
            />
          </figure>
        </section>

        <section className="text-center mx-30 lg:p-30 pt-10 ">
          <div>
            <h2 className="text-xl text-gray-400 my-10">WATCHES STRAP</h2>
            <h1 className="text-5xl text-red-800 font-headline">
              MADE BY HAND FOR EVERY KIND OF WRIST
            </h1>
            <p className="my-5 font-robotMono">
              Switching out your strap is a fast and easy way to give your OMEGA
              a personal makeover. You can fix a strap to suit the season, the
              occasion - or even your ever-changing moods. Start your search now
              and discover the playful side of Swiss precision.
            </p>
            <button className="border bg-opaque p-2 hover:bg-red-600 hover:text-white my-10 lg:my-0">
              SHOP THE COLLECTION
            </button>
          </div>
        </section>

        <section className="max-w-[1320px] grid cols-1 lg:grid-cols-2  gap-10 lg:ml-30">
          <figure>
            <img
              src="https://www.omegawatches.com/media/wysiwyg/image-2-3-watchstrapsV2-small.jpg"
              className="w-full lg:w-[650px] h-fit"
            />
          </figure>
          <figure>
            <img
              src="https://www.omegawatches.com/media/wysiwyg/image-moduleEcomm-2-4-watchstraps.jpg"
              className=" w-full lg:w-75 h-fit"
            />
          </figure>
        </section>

        <section className="max-w-[1320px] my-30 ">
          <div className="text-center">
            <h1 className="text-5xl text-red-800 font-headline">
              {" "}
              NEWS & STORIES
            </h1>
            <button className="inline shadow-lg my-10">See all articles</button>
          </div>

          <div className="flex justify-center items-center gap-5">
            <div className="w-fit h-fit lg:w-[250px] lg:h-[450px] grid gap-4 shadow-lg shadow-gray-400 ">
              <Link to="a">
                <figure>
                  <img
                    src="https://www.omegawatches.com/media/story/20260708-audrey_werro-THUMBNAIL-400x320.jpg"
                    className="w-full lg:w-75"
                  />
                </figure>
                <p className="text-[12px] text-red-800 px-3 hover:underline text-center lg:text-left">
                  SPORT{" "}
                </p>
              </Link>
              <div className="p-3 grid gap-4 text-center lg:text-left">
                <h2 className="text-xl text-red-800 font-headline font-medium">
                  AUDRERY WELCOME IS WERROE IS WELCOMED AS A NEW
                </h2>
                <p className="hidden lg:block font-robotMono">
                  One of Switzerland's middle-distance runners is a talent in
                  the world of athletics.{" "}
                </p>
              </div>
            </div>

            <div className="hidden lg:block w-[250px] h-[450px] grid gap-4 shadow-lg shadow-gray-400 ">
              <Link to="a">
                <figure>
                  <img
                    src="https://www.omegawatches.com/media/story/20260504-metgala-nicolekidman-THUMBNAIL-400x320.jpg"
                    className="w-75"
                  />
                </figure>
                <p className="text-[12px] text-red-800 px-3 hover:underline">
                  PEOPLE{" "}
                </p>
              </Link>
              <div className="p-3 grid gap-4">
                <h2 className="text-xl text-red-800 font-headline font-medium">
                  OMEGA on the Met Gala Red Carpet
                </h2>
                <p className="font-robotMono">
                  Nicole Kidman and Colman Domingo shine in Vintage
                  Constellation at the 2026 Met Gala.
                </p>
              </div>
            </div>

            <div className="hidden lg:block w-[250px] h-[450px] grid gap-4 shadow-lg shadow-gray-400 ">
              <Link to="a">
                <figure>
                  <img
                    src="https://www.omegawatches.com/media/story/000-THUMBNAIL-400x320-PO-London2026.jpg"
                    className="w-75"
                  />
                </figure>
                <p className="text-[12px] text-red-800 px-3 hover:underline">
                  EVENTS{" "}
                </p>
              </Link>
              <div className="p-3 grid gap-4">
                <h2 className="text-xl text-red-800 font-headline font-medium">
                  Celebrating the Planet Ocean in London
                </h2>
                <p className="font-robotMono">
                  Continuing the global launch alongside brand ambassador, Aaron
                  Taylor-Johnson.
                </p>
              </div>
            </div>

            <div className=" hidden lg:block w-[250px] h-[450px] grid gap-4 shadow-lg shadow-gray-400 ">
              <Link to="a">
                <figure>
                  <img
                    src="https://www.omegawatches.com/media/story/20260413-masters_augusta-THUMBNAIL-400x320_1.jpg"
                    className="w-75"
                  />
                </figure>
                <p className="text-[12px] text-red-800 px-3 hover:underline">
                  SPORTS{" "}
                </p>
              </Link>
              <div className="p-3 grid gap-4">
                <h2 className="text-xl text-red-800 font-headline font-medium">
                  Rory McIlroy Wins The Masters at Augusta
                </h2>
                <p className="font-robotMono">
                  Rory McIlroy has won The Masters at Augusta for a second year
                  in a row.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
