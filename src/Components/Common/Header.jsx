import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

export default function Header() {
  let [menu, setMenu] = useState("false");

  return (
    <>
      <section className=" sticky top-0  z-9999  bg-white font-poppins w-full flex items-center justify-between shadow-lg  shadow-gray-200 uppercase px-5 lg:px-15 text-sm  md:sticky top-0  bg-white">
        <div>
          <ul className=" hidden lg:flex justify-between gap-10">
            <Link>
              <li className="hover:text-red-600"> FIND A BOUTIQUE </li>{" "}
            </Link>
            <Link>
              <li className="hover:text-red-600"> CONTACT US</li>
            </Link>
          </ul>
          {/* resposive */}
          <ul className="lg:hidden sm:flex flex col gap-5 text-xl ">
            <li>
              <button onClick={() => setMenu(menu == "true" ? null : "true")}>
                {menu == "true" ? <RxCross2 /> : <LuMenu/>}
              </button>
            </li>
            <li>
              <FiSearch />
            </li>
          </ul>
        </div>
        <div>
          <figure>
            <img
              src="https://cdn.cookielaw.org/logos/0ba92a5d-61d9-42ec-ad9c-85b5c9ffbe6e/019aa180-684b-772d-a049-dc19e46e3b05/4c73951b-9f1c-456f-b81e-cde035288911/Omega_Logo-square.png"
              className="w-[80px] h-[70px] mx-auto "
            />
          </figure>
          <ul className=" hidden lg:flex gap-10 ">
            <Link>
              <li className="hover:border-b-2 h-8 border-red-600 hover:text-red-600 ">
                watches
              </li>
            </Link>
            <Link>
              <li className="hover:border-b-2 h-8 border-red-600 hover:text-red-600">
                accessories
              </li>
            </Link>
            <Link>
              <li className="hover:border-b-2 h-8 border-red-600 hover:text-red-600">
                gifts
              </li>
            </Link>
            <Link>
              <li className="hover:border-b-2 h-8 border-red-600 hover:text-red-600">
                services
              </li>
            </Link>
            <Link>
              <li className="hover:border-b-2 h-8 border-red-600 hover:text-red-600">
                world of omega
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5 text-xl sm:m-0">
            <li className="hidden lg:block lg:hover:text-red-600 ">
              <FiSearch />
            </li>
            <li className=" hover:text-red-600 ">
              <FaRegHeart />
            </li>
            <li className="hover:text-red-600">
              <LuUserRound />
            </li>
          </ul>
        </div>
      </section>

        {/* Responsive */}
      {menu == "true" && (
        <section>
          <div className="fixed top-0 z-9999 w-full h-[510px] bg-white p-5 mt-17 ">
            <ul className=" grid gap-10  text-[15px] font-semibold text-gray-500 uppercase">
              <li className="flex justify-between">
                watches <IoIosArrowForward className="text-xl text-gray-400" />
              </li>
              <li className="flex justify-between">
                accessories
                <IoIosArrowForward className="text-xl text-gray-400" />
              </li>
              <li className="flex justify-between">
                gift <IoIosArrowForward className="text-xl text-gray-400" />
              </li>
              <li className="flex justify-between">
                service
                <IoIosArrowForward className="text-xl text-gray-400" />
              </li>
              <li className="flex justify-between">
                world of omega
                <IoIosArrowForward className="text-xl text-gray-400" />
              </li>
            </ul>
            <ul className=" grid gap-10 text-sm text-gray-500 mt-10">
              <li className="flex gap-3">
                <GrLanguage className="text-lg" /> English
              </li>
              <li className="flex gap-3">
                <CiLocationOn className="text-xl font-semibold" /> Find a
                Boutique
              </li>
              <li className="flex gap-3">
                <AiOutlineMail className="text-lg" /> Contact Us
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
