import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import { IoLogoWechat } from "react-icons/io5";
import { FaWeibo } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";

export default function Footer() {
  let [menu, setMenu] = useState();

  return (
    <div>
      <footer className="font-poppins">
        <div className="grid grid-cols-1  lg:grid-cols-2">
          <div className=" grid relative w-full bg-gray-100 py-15 px-10">
            <h3 className="text-center lg:text-left font-headline mb-4">
              Subscribe to our newsletter
            </h3>
            <label className=""> Email</label>
            <div className="flex">
              <input
                type="text"
                placeholder=" "
                className="w-full border mx-auto px-30 py-2 "
              />
              <button className=" bg-red-700 hover:border-1 px-4 py-2 hover:bg-white ">
                <IoIosArrowForward className="font-bold text-white hover:text-black" />
              </button>
            </div>
          </div>
          {/* Responsive sm only for */}
          <button className="lg:hidden mx-auto w-fit border border-gray-300 bg-opaque px-10 py-3 bg-gray-200">
            HOME PAGE
          </button>

          <div className=" w-full bg-gray-100 lg:py-15 px-10 ">
            <h1 className="py-5 text-center lg:text-left font-robotMono">Follow Us</h1>
            <div className="flex justify-start gap-5 lg:mx-0 mx-20 mb-10 lg:mb-0">
              <FaInstagram className="w-full lg:w-[25px] h-[25px] text-gray-800 hover:text-red-600" />
              <FaFacebook className="w-full lg:w-[25px] h-[25px] text-gray-800 hover:text-red-600" />
              <BsTwitterX className="w-full lg:w-[25px] h-[25px] text-gray-800 hover:text-red-600" />
              <TfiYoutube className="w-full lg:w-[25px] h-[25px] text-gray-800 hover:text-red-600" />
              <IoLogoWechat className="w-full lg:w-[25px] h-[25px] text-gray-800 hover:text-red-600" />
              <FaWeibo className="w-full lg:w-[25px] h-[25px] text-gray-800 hover:text-red-600" />
              <FaPinterest className="w-full lg:w-[25px] h-[25px] text-gray-800 hover:text-red-600" />
              <FaTiktok className="w-full lg:w-[25px] h-[25px] text-gray-80 hover:text-red-600" />
              <FaSnapchat className="w-full lg:w-[25px] h-[25px] text-gray-800 hover:text-red-600" />
            </div>
          </div>
        </div>

        <section className="hidden lg:grid grid-cols-4 mx-20">
          <div>
            <h1 className="lg:py-5 text-sm font-semibold text-gray-600">
              THE COLLECTION
            </h1>
            <ul className="text-[13px] text-gray-600 grid gap-2">
              <Link>
                <li className="hover:text-red-600">GlobeMaster </li>
              </Link>
              <Link>
                <li className="hover:text-red-600">Constellation </li>
              </Link>
              <Link>
                <li className="hover:text-red-600"> Diver 300M</li>
              </Link>
              <Link>
                <li className="hover:text-red-600"> Aqua terra 150M</li>
              </Link>
              <Link>
                <li className="hover:text-red-600">Seamaster 300 </li>
              </Link>
              <Link>
                <li className="hover:text-red-600">Planet Ocean 600M </li>
              </Link>
              <Link>
                <li className="hover:text-red-600"> Moonwatch</li>
              </Link>
              <Link>
                <li className="hover:text-red-600">Ladymatic </li>
              </Link>
              <Link>
                <li className="hover:text-red-600">Dark side of the Moon </li>
              </Link>
              <Link>
                <li className="hover:text-red-600">Trésor</li>
              </Link>
              <Link>
                <li className="hover:text-red-600">Prestige </li>
              </Link>
              <Link>
                <li className="hover:text-red-600"> Tourbillon</li>
              </Link>
            </ul>
          </div>
          <div className="grid  gap-5">
            <div>
              <h1 className="py-5 text-sm font-semibold text-gray-600">
                FIND YOUR OMEGA
              </h1>
              <ul className="text-[13px] text-gray-600 grid gap-2">
                <Link>
                  <li className="hover:text-red-600">Women's Watches </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600">Men's Watches </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600">Gold Watches </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600">Chronograph Watches </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> Dress Watches</li>
                </Link>
                <Link>
                  <li className="hover:text-red-600">Dive Watches </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600">Automatic Watches </li>
                </Link>
              </ul>
            </div>
            <div>
              <h1 className="py-5 text-sm font-semibold text-gray-600">
                GIFT IDEAS
              </h1>
              <ul className="text-[13px] text-gray-600 grid gap-2">
                <Link>
                  <li className="hover:text-red-600">Gifts for Her </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600">Gifts for Him </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> Festive Gifts</li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> 007 Essentials</li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> View all</li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="grid  gap-5">
            <div>
              <h1 className="py-5 text-sm font-semibold text-gray-600">
                WORLS OF OMEGA
              </h1>
              <ul className="text-[13px] text-gray-600 grid gap-2">
                <Link>
                  <li className="hover:text-red-600"> Watchmaking</li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> Watchmaking </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> Space </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> Sport </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> James Bond </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> The OMEGA Museum </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> Chronicle </li>
                </Link>
              </ul>
            </div>
            <div>
              <h1 className="py-5 text-sm font-semibold text-gray-600">
                MATER OF CHRONOMETER
              </h1>
              <ul className="text-[13px] text-gray-600 grid gap-2">
                <Link>
                  <li className="hover:text-red-600"> Certification</li>
                </Link>
                <Link>
                  <li className="hover:text-red-600">
                    {" "}
                    Access my Test Results++
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600">
                    iPhone Card Scanner App{" "}
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"></li>
                </Link>
              </ul>
            </div>
            <div>
              <h1 className="py-5 text-sm font-semibold text-gray-600">
                STORE LOCATOR
              </h1>
              <ul className="text-[13px] text-gray-600 grid gap-2">
                <Link>
                  <li className="hover:text-red-600"> Find a Store</li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> Locate me</li>
                </Link>
                <Link>
                  <li className="hover:text-red-600">Boutique Appointment </li>
                </Link>
              </ul>
            </div>
          </div>

          <div className="grid gap-5">
            <div>
              <h1 className="py-5 text-sm font-semibold text-gray-600">
                CUSTOMER SERVICE
              </h1>
              <ul className="text-[13px] text-gray-600 grid gap-2">
                <Link>
                  <li className="hover:text-red-600">
                    {" "}
                    Interventions and Prices
                  </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> Preserve your OMEGA </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> Find a Service Center</li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> Order a Catalogue </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> FAQ </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> Glossary </li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> </li>
                </Link>
              </ul>
            </div>
            <div>
              <h1 className="py-5 text-sm font-semibold text-gray-600">MORE</h1>
              <ul className="text-[13px] text-gray-600 grid gap-2">
                <Link>
                  <li className="hover:text-red-600"> Press Room</li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> Careers</li>
                </Link>
              </ul>
            </div>
            <div>
              <button className="border py-2 px-7 font-semibold text-lg text-gray-500 ">
                CONTACT US
              </button>
            </div>
          </div>
        </section>

        <section className="hidden lg:block p-15">
          <p className="text-[12px] text-gray-600 my-5">
            Copyright OMEGA SA. All rights reserved.
          </p>
          <div className="flex justify-between ">
            <ul className="flex gap-10 text-[12px] text-gray-600">
              <Link>
                <li className="hover:text-red-600"> Terms of use</li>
              </Link>
              <Link>
                <li className="hover:text-red-600"> Privacy Notice</li>
              </Link>
              <Link>
                <li className="hover:text-red-600"> Cookies Notice</li>
              </Link>
              <Link>
                <li className="hover:text-red-600"> Cookies Setting</li>
              </Link>
            </ul>
            <div className="flex gap-5 text-[12px] text-gray-600 hover:text-red-600">
              <AiOutlineGlobal className="text-xl" />
              <p className="text-sm">ENGLISH</p>
            </div>
          </div>
        </section>

        {/* Responsive sm-md only */}
        <section className="lg:hidden sm:block">
          <div className="mx-5">
            <h1 className=" relative py-5 text-[15px] font-semibold text-gray-600">
              THE COLLECTION
              <button
                onClick={() => setMenu(menu == 1 ? null : 1)}
                className="absolute right-0"
              >
                {menu == 1 ? (
                  <FaMinus className="text-lg" />
                ) : (
                  <GoPlus className="text-xl" />
                )}
              </button>
            </h1>
            {menu == 1 && (
              <ul className="text-[16px] text-gray-600 grid gap-2">
                <li className="hover:text-red-600">GlobeMaster </li>

                <li className="hover:text-red-600">Constellation </li>

                <li className="hover:text-red-600"> Diver 300M</li>

                <li className="hover:text-red-600"> Aqua terra 150M</li>

                <li className="hover:text-red-600">Seamaster 300 </li>

                <li className="hover:text-red-600">Planet Ocean 600M </li>

                <li className="hover:text-red-600"> Moonwatch</li>

                <li className="hover:text-red-600">Ladymatic </li>

                <li className="hover:text-red-600">Dark side of the Moon </li>

                <li className="hover:text-red-600">Trésor</li>

                <li className="hover:text-red-600">Prestige </li>

                <li className="hover:text-red-600"> Tourbillon</li>
              </ul>
            )}
          </div>

          <div className="mx-5">
            <h1 className=" relative py-5 text-[15px] font-semibold text-gray-600 uppercase">
              Find your OMEGA
              <button
                onClick={() => setMenu(menu == 2 ? null : 2)}
                className="absolute right-0"
              >
                {menu == 2 ? (
                  <FaMinus className="text-lg" />
                ) : (
                  <GoPlus className="text-xl" />
                )}
              </button>
            </h1>
            {menu == 2 && (
              <ul className="text-[16px] text-gray-600 grid gap-2">
                <li className="hover:text-red-600"> Women's Watches </li>

                <li className="hover:text-red-600"> Men's Watches </li>

                <li className="hover:text-red-600"> Gold Watches </li>

                <li className="hover:text-red-600"> Chronograph Watches </li>

                <li className="hover:text-red-600"> Dress Watches </li>

                <li className="hover:text-red-600"> Dive Watches </li>

                <li className="hover:text-red-600"> Automatic Watches </li>
              </ul>
            )}
          </div>

          <div className="mx-5">
            <h1 className=" relative py-5 text-[15px] font-semibold text-gray-600 uppercase">
              Gift Ideas
              <button
                onClick={() => setMenu(menu == 3 ? null : 3)}
                className="absolute right-0"
              >
                {menu == 3 ? (
                  <FaMinus className="text-lg" />
                ) : (
                  <GoPlus className="text-xl" />
                )}
              </button>
            </h1>
            {menu == 3 && (
              <ul className="text-[16px] text-gray-600 grid gap-2">
                <li className="hover:text-red-600"> Gifts for Her </li>

                <li className="hover:text-red-600"> Gifts for Him </li>

                <li className="hover:text-red-600"> Festive Gifts </li>

                <li className="hover:text-red-600"> 007 Essentials </li>

                <li className="hover:text-red-600"> View all </li>
              </ul>
            )}
          </div>

          <div className="mx-5">
            <h1 className=" relative py-5 text-[15px] font-semibold text-gray-600 uppercase">
              World of OMEGA
              <button
                onClick={() => setMenu(menu == 4 ? null : 4)}
                className="absolute right-0"
              >
                {menu == 4 ? (
                  <FaMinus className="text-lg" />
                ) : (
                  <GoPlus className="text-xl" />
                )}
              </button>
            </h1>
            {menu == 4 && (
              <ul className="text-[16px] text-gray-600 grid gap-2">
                <li className="hover:text-red-600"> Watchmaking </li>

                <li className="hover:text-red-600"> Space </li>

                <li className="hover:text-red-600"> Sport </li>

                <li className="hover:text-red-600"> James Bond </li>

                <li className="hover:text-red-600"> The OMEGA Museum </li>

                <li className="hover:text-red-600"> Chronicle</li>
              </ul>
            )}
          </div>

          <div className="mx-5">
            <h1 className=" relative py-5 text-[15px] font-semibold text-gray-600 uppercase">
              Master Chronometer
              <button
                onClick={() => setMenu(menu == 5 ? null : 5)}
                className="absolute right-0"
              >
                {menu == 5 ? (
                  <FaMinus className="text-lg" />
                ) : (
                  <GoPlus className="text-xl" />
                )}
              </button>
            </h1>
            {menu == 5 && (
              <ul className="text-[16px] text-gray-600 grid gap-2">
                <li className="hover:text-red-600"> Certification </li>

                <li className="hover:text-red-600"> Access my Test Results </li>

                <li className="hover:text-red-600">
                  {" "}
                  iPhone Card Scanner App{" "}
                </li>
              </ul>
            )}
          </div>

          <div className="mx-5">
            <h1 className=" relative py-5 text-[15px] font-semibold text-gray-600 uppercase">
              Customer Service
              <button
                onClick={() => setMenu(menu == 6 ? null : 6)}
                className="absolute right-0"
              >
                {menu == 6 ? (
                  <FaMinus className="text-lg" />
                ) : (
                  <GoPlus className="text-xl" />
                )}
              </button>
            </h1>
            {menu == 6 && (
              <ul className="text-[16px] text-gray-600 grid gap-2">
                <li className="hover:text-red-600">Interventions and Prices</li>

                <li className="hover:text-red-600"> Preserve your OMEGA </li>

                <li className="hover:text-red-600"> Find a Service Center </li>

                <li className="hover:text-red-600"> Order a Catalogue </li>

                <li className="hover:text-red-600"> FAQ </li>

                <li className="hover:text-red-600"> Glossary </li>
              </ul>
            )}
          </div>

          <section className="p-15">
            <div className="flex justify-between mx-10 ">
              <ul className="flex gap-10 text-[12px] text-gray-600">
                <Link>
                  <li className="hover:text-red-600"> Terms of use</li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> Privacy Notice</li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> Cookies Notice</li>
                </Link>
                <Link>
                  <li className="hover:text-red-600"> Cookies Setting</li>
                </Link>
              </ul>
            </div>
            <p className="text-[12px] text-gray-600 my-5 text-center">
              Copyright OMEGA SA. All rights reserved.
            </p>
          </section>
        </section>
      </footer>
    </div>
  );
}
