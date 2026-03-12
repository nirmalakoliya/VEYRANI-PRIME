import Link from "next/link";
import React from "react";
import { useState } from "react";
import {
  MdOutlineCalendarMonth,
  MdOutlineDateRange,
  MdOutlineStarBorderPurple500,
  MdOutlineStarHalf,
  MdOutlineStarPurple500,
} from "react-icons/md";
import { ImTwitter } from "react-icons/im";
import { MdFacebook } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { MdOutlineBed } from "react-icons/md";
import { IoMdPlayCircle } from "react-icons/io";
import { FaLinkedinIn, FaSearch } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

const DetailPage = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <>
      <section className="py-[80px] pt-40">
        <div className="flex justify-center items-center">
          <span className="flex justify-center items-center sm:text-4xl text-black dark:text-white font-black text-3xl md:text-4xl lg:text-4xl text-center z-20 relative mb-8">
            Properties Details
          </span>
        </div>

        <div className="container property-tab pt-[70px] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-[30px]">
            <div className="lg:col-start-1 lg:col-span-8">
              <ul className="flex flex-wrap gap-x-[15px] md:gap-x-[35px] gap-y-[15px] items-center mb-[30px]">
                <li>
                  <ul className="flex gap-x-[15px] md:gap-x-30px items-center">
                    <li>
                      <Link
                        href="#"
                        className="ttext-xs md:text-sm uppercase text-white px-[15px] pt-[5px] pb-0.5 bg-blue-500 font-semibold"
                      >
                        <span className="leading-1.8 md:leading-1.8">
                          Featured
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="#"
                        className="ttext-xs md:text-sm uppercase text-white px-[15px] pt-[5px] pb-0.5 bg-orange-400 font-semibold"
                      >
                        <span className="leading-1.8 md:leading-1.8">
                          For Rent
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <ul className="flex gap-x-[15px] md:gap-x-[30px] items-center">
                    <li>
                      <p className="text-xs md:text-sm font-semibold ">
                        <span className="leading-1.8 md:leading-1.8 flex justify-center items-center gap-2">
                          <MdOutlineDateRange />
                          May 19, 2024
                        </span>
                      </p>
                    </li>

                    <li>
                      <Link
                        href="#"
                        className="text-xs md:text-sm font-semibold"
                      >
                        <span className="leading-1.8 md:leading-1.8 flex justify-center items-center gap-2">
                          <MdFacebook />
                          35 Comments
                        </span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <div>
                <h4 className="text-2xl md:text-[26px] lg:text-3xl xl:text-4xl font-bold text-heading-color mb-[15px]">
                  <span className="leading-1.3 lg:leading-1.3 xl:leading-1.3">
                    Diamond Manor Apartment
                  </span>
                </h4>
                <p className="text-sm">
                  <span className="leading-1.8 flex  items-center gap-2">
                    <IoLocation />
                    Belmont Gardens, Chicago
                  </span>
                </p>

                <h4 className="text-[22px] font-semibold leading-1.3 pl-[10px]  text-heading-color my-[30px]">
                  Description.
                </h4>
                <p className="text-sm lg:text-base my-5">
                  <span className="leading-1.8 lg:leading-1.8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus corrupti dolore expedita, beatae dignissimos fugit,
                    debitis molestiae sapiente dolores itaque aspernatur, id
                    facere doloribus et eos voluptate blanditiis delectus sed
                    alias inventore? Expedita odit sit reprehenderit porro
                    sapiente labore earum quisquam. Praesentium, nihil quod
                    accusantium fugit doloribus fugiat inventore dolorem!
                  </span>
                </p>
                <p className="text-sm lg:text-base my-5">
                  <span className="leading-1.8 lg:leading-1.8">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores voluptas facilis non dolorum, placeat cupiditate
                    esse expedita cum libero porro. Perspiciatis vel vero non
                    officiis aliquid porro velit nemo quaerat expedita earum
                    debitis id laudantium rem, animi excepturi, deserunt ab!
                  </span>
                </p>

                <h4 className="text-[22px] font-semibold leading-1.3 pl-[10px] text-heading-color my-[30px]">
                  Property Detail.
                </h4>
                <div className="flex flex-col md:flex-row bg-[#F2F6F7] dark:bg-[#FFC48A] rounded-md dark:text-black mb-[60px]">
                  <ul className="px-[30px] md:px-[50px] py-5 md:pt-[30px] md:pb-10 md:border-r-2 md:border-border-color-7">
                    <li className="text-sm mt-4 font-semibold">
                      <span className="leading-1.8 min-w-[110px] inline-block flex-shrink-0">
                        Property ID:
                      </span>
                      <p className="text-sm lg:text-base inline-block text-heading-color">
                        <span className="leading-1.8 lg:leading-1.8">HZ29</span>
                      </p>
                    </li>

                    <li className="text-sm mt-4 font-semibold">
                      <span className="leading-1.8 min-w-[110px] inline-block flex-shrink-0">
                        Home Area:
                      </span>
                      <p className="text-sm lg:text-base inline-block text-heading-color">
                        <span className="leading-1.8 lg:leading-1.8">
                          120 sqft
                        </span>
                      </p>
                    </li>

                    <li className="text-sm mt-4 font-semibold">
                      <span className="leading-1.8 min-w-[110px] inline-block flex-shrink-0">
                        Rooms:
                      </span>
                      <p className="text-sm lg:text-base inline-block text-heading-color">
                        <span className="leading-1.8 lg:leading-1.8">7</span>
                      </p>
                    </li>

                    <li className="text-sm mt-4 font-semibold">
                      <span className="leading-1.8 min-w-[110px] inline-block flex-shrink-0">
                        Baths
                      </span>
                      <p className="text-sm lg:text-base inline-block text-heading-color">
                        <span className="leading-1.8 lg:leading-1.8">2</span>
                      </p>
                    </li>

                    <li className="text-sm mt-4 font-semibold">
                      <span className="leading-1.8 min-w-[110px] inline-block flex-shrink-0">
                        Year built:
                      </span>
                      <p className="text-sm lg:text-base inline-block text-heading-color">
                        <span className="leading-1.8 lg:leading-1.8">1992</span>
                      </p>
                    </li>
                  </ul>

                  <ul className="px-[30px] md:px-[50px] py-5 md:pt-[30px] md:pb-10">
                    <li className="text-sm mt-4 font-semibold">
                      <span className="leading-1.8 min-w-[110px] inline-block flex-shrink-0">
                        Lot Area:
                      </span>
                      <p className="text-sm lg:text-base inline-block text-heading-color">
                        HZ29
                      </p>
                    </li>

                    <li className="text-sm mt-4 font-semibold">
                      <span className="leading-1.8 min-w-[110px] inline-block flex-shrink-0">
                        Lot dimensions:
                      </span>
                      <p className="text-sm lg:text-base inline-block text-heading-color">
                        120 sqft
                      </p>
                    </li>

                    <li className="text-sm mt-4 font-semibold">
                      <span className="leading-1.8 min-w-[110px] inline-block flex-shrink-0">
                        Beds:
                      </span>
                      <p className="text-sm lg:text-base inline-block text-heading-color">
                        7
                      </p>
                    </li>

                    <li className="text-sm mt-4 font-semibold">
                      <span className="leading-1.8 min-w-[110px] inline-block flex-shrink-0">
                        Price:
                      </span>
                      <p className="text-sm lg:text-base inline-block text-heading-color">
                        2
                      </p>
                    </li>

                    <li className="text-sm mt-4 font-semibold">
                      <span className="leading-1.8 min-w-[110px] inline-block flex-shrink-0">
                        Property Status:
                      </span>
                      <p className="text-sm lg:text-base inline-block text-heading-color">
                        For Sale
                      </p>
                    </li>
                  </ul>
                </div>

                <h4 className="text-[22px] font-semibold leading-1.3 pl-[10px]  text-heading-color my-[30px]">
                  Facts and Features.
                </h4>
                <ul className="flex flex-wrap mb-[45px]">
                  <li className="text-sm pt-4 pb-[10px] pr-6 flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#FFF2F0] dark:bg-[#FFC48A] rounded-lg">
                      <MdOutlineBed className="text-[22px] text-[#FF8A74] dark:text-black" />
                    </div>
                    <div>
                      <h6 className="text-sm font-normal mb-0.5">
                        <span className="leading-1.3"> Living Room</span>
                      </h6>
                      <p className="text-[12.25px] lg:text-sm">
                        20 x 16 sq feet
                      </p>
                    </div>
                  </li>

                  <li className="text-sm pt-4 pb-[10px] pr-6 flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#FFF2F0] dark:bg-[#FFC48A] rounded-lg">
                      <MdOutlineBed className="text-[22px] text-[#FF8A74] dark:text-black" />
                    </div>
                    <div>
                      <h6 className="text-sm font-normal mb-0.5">
                        <span className="leading-1.3">Garage</span>
                      </h6>
                      <p className="text-[12.25px] lg:text-sm">
                        20 x 16 sq feet
                      </p>
                    </div>
                  </li>

                  <li className="text-sm pt-4 pb-[10px] pr-6 flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#FFF2F0] dark:bg-[#FFC48A] rounded-lg">
                      <MdOutlineBed className="text-[22px] text-[#FF8A74] dark:text-black" />
                    </div>
                    <div>
                      <h6 className="text-sm font-normal mb-0.5">
                        <span className="leading-1.3">Dining Area</span>
                      </h6>
                      <p className="text-[12.25px] lg:text-sm">
                        20 x 16 sq feet
                      </p>
                    </div>
                  </li>

                  <li className="text-sm pt-4 pb-[10px] pr-6 flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#FFF2F0] dark:bg-[#FFC48A] rounded-lg">
                      <MdOutlineBed className="text-[22px] text-[#FF8A74] dark:text-black" />
                    </div>
                    <div>
                      <h6 className="text-sm font-normal mb-0.5">
                        <span className="leading-1.3">Bedroom</span>
                      </h6>
                      <p className="text-[12.25px] lg:text-sm">
                        20 x 16 sq feet
                      </p>
                    </div>
                  </li>

                  <li className="text-sm pt-4 pb-[10px] pr-6 flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#FFF2F0] dark:bg-[#FFC48A] rounded-lg">
                      <MdOutlineBed className="text-[22px] text-[#FF8A74] dark:text-black" />
                    </div>
                    <div>
                      <h6 className="text-sm font-normal mb-0.5">
                        <span className="leading-1.3">Bathroom</span>
                      </h6>
                      <p className="text-[12.25px] lg:text-sm">
                        20 x 16 sq feet
                      </p>
                    </div>
                  </li>

                  <li className="text-sm pt-4 pb-[10px] pr-6 flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#FFF2F0] dark:bg-[#FFC48A] rounded-lg">
                      <MdOutlineBed className="text-[22px] text-[#FF8A74] dark:text-black" />
                    </div>
                    <div>
                      <h6 className="text-sm font-normal mb-0.5">
                        <span className="leading-1.3">Gym Area</span>
                      </h6>
                      <p className="text-[12.25px] lg:text-sm">
                        20 x 16 sq feet
                      </p>
                    </div>
                  </li>

                  <li className="text-sm pt-4 pb-[10px] pr-6 flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#FFF2F0] dark:bg-[#FFC48A] rounded-lg">
                      <MdOutlineBed className="text-[22px] text-[#FF8A74] dark:text-black" />
                    </div>
                    <div>
                      <h6 className="text-sm font-normal mb-0.5">
                        <span className="leading-1.3">Garden</span>
                      </h6>
                      <p className="text-[12.25px] lg:text-sm">
                        20 x 16 sq feet
                      </p>
                    </div>
                  </li>

                  <li className="text-sm pt-4 pb-[10px] pr-6 flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#FFF2F0] dark:bg-[#FFC48A] rounded-lg">
                      <MdOutlineBed className="text-[22px] text-[#FF8A74] dark:text-black" />
                    </div>
                    <div>
                      <h6 className="text-sm font-normal mb-0.5">
                        <span className="leading-1.3">Parking</span>
                      </h6>
                      <p className="text-[12.25px] lg:text-sm">
                        20 x 16 sq feet
                      </p>
                    </div>
                  </li>
                </ul>

                <h4 className="text-[22px] font-semibold leading-1.3 pl-[10px]  text-heading-color my-[30px]">
                  From Our Gallery.
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[60px]">
                  <div className="md:cols-start-1 md:col-span-1 leading-1">
                    <img
                      src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/others/15.jpg"
                      alt=""
                      className="w-full md:h-full"
                    />
                  </div>

                  <div className="md:cols-start-1 md:col-span-1 md:row-start-2 md:row-sapn-1 leading-1">
                    <img
                      src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/others/15.jpg"
                      alt=""
                      className="w-full"
                    />
                  </div>

                  <div className="md:cols-start-2 md:col-span-1 md:row-start-1 md:row-span-2 leading-1">
                    <img
                      src="	https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/others/16.jpg"
                      alt=""
                      className="w-full md:h-full"
                    />
                  </div>
                </div>

                <h4 className="text-[22px] font-semibold leading-1.3 pl-[10px]  text-heading-color my-[30px]">
                  Amenities.
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 gap-y-4 md:gap-y-6 lg:gap-y-8">
                  <ul className="flex flex-col gap-y-4 md:gap-y-6">
                    <li className="text-sm md:text-base font-bold">
                      <label
                        htmlFor="air-conditioning"
                        className="checkbox-item leading-1.8 group flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                          name="air-conditioning"
                          id="air-conditioning"
                        />
                        <span>Air Conditioning</span>
                      </label>
                    </li>

                    <li className="text-sm md:text-base font-bold">
                      <label
                        htmlFor="gym"
                        className="checkbox-item leading-1.8 group flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                          name="gym"
                          id="gym"
                        />
                        <span>Gym</span>
                      </label>
                    </li>

                    <li className="text-sm md:text-base font-bold">
                      <label
                        htmlFor="microwave"
                        className="checkbox-item leading-1.8 group flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                          name="microwave"
                          id="microwave"
                        />
                        <span>Microwave</span>
                      </label>
                    </li>

                    <li className="text-sm md:text-base font-bold">
                      <label
                        htmlFor="swimming-bath"
                        className="checkbox-item leading-1.8 group flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                          name="swimming-bath"
                          id="swimming-bath"
                        />
                        <span>Swimming Bath</span>
                      </label>
                    </li>

                    <li className="text-sm md:text-base font-bold">
                      <label
                        htmlFor="swimming-pool"
                        className="checkbox-item leading-1.8 group flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                          name="swimming-pool"
                          id="swimming-pool"
                        />
                        <span>Swimming Pool</span>
                      </label>
                    </li>
                  </ul>

                  <ul className="flex flex-col gap-y-4 md:gap-y-6">
                    <li className="text-sm md:text-base font-bold">
                      <label
                        htmlFor="gap-y"
                        className="checkbox-item leading-1.8 group flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                          name="gap-y"
                          id="gap-y"
                        />
                        <span>gap-y-15px</span>
                      </label>
                    </li>

                    <li className="text-sm md:text-base font-bold">
                      <label
                        htmlFor="recreation"
                        className="checkbox-item leading-1.8 group flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                          name="recreation"
                          id="recreation"
                        />
                        <span>Recreation</span>
                      </label>
                    </li>

                    <li className="text-sm md:text-base font-bold">
                      <label
                        htmlFor="basketball-court"
                        className="checkbox-item leading-1.8 group flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                          name="basketball-court"
                          id="basketball-court"
                        />
                        <span>Basketball Court</span>
                      </label>
                    </li>

                    <li className="text-sm md:text-base font-bold">
                      <label
                        htmlFor="fireplace"
                        className="checkbox-item leading-1.8 group flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                          name="fireplace"
                          id="fireplace"
                        />
                        <span>Fireplace</span>
                      </label>
                    </li>
                  </ul>

                  <ul className="flex flex-col gap-y-4 md:gap-y-6">
                    <li className="text-sm md:text-base font-bold">
                      <label
                        htmlFor="refrigerator"
                        className="checkbox-item leading-1.8 group flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                          name="refrigerator"
                          id="refrigerator"
                        />
                        <span>Refrigerator</span>
                      </label>
                    </li>

                    <li className="text-sm md:text-base font-bold">
                      <label
                        htmlFor="window-coverings"
                        className="checkbox-item leading-1.8 group flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                          name="window-coverings"
                          id="window-coverings"
                        />
                        <span>Window Coverings</span>
                      </label>
                    </li>

                    <li className="text-sm md:text-base font-bold">
                      <label
                        htmlFor="washer"
                        className="checkbox-item leading-1.8 group flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                          name="washer"
                          id="washer"
                        />
                        <span>Washer</span>
                      </label>
                    </li>

                    <li className="text-sm md:text-base font-bold">
                      <label
                        htmlFor="indoor-game"
                        className="checkbox-item leading-1.8 group flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="mr-2"
                          name="indoor-game"
                          id="indoor-game"
                        />
                        <span>Indoor Game</span>
                      </label>
                    </li>
                  </ul>
                </div>

                <h4 className="text-xl md:text-2xl font-semibold leading-tight pl-3  text-heading-color my-7">
                  Floor Plans.
                </h4>
                <div className="mb-10">
                  <div className="tab-links flex flex-wrap items-center gap-x-2 lg:gap-x-8 xl:gap-x-12 gap-y-2 text-sm lg:text-lg xl:text-xl text-heading-color mb-10">
                    <span className="p-0.5 border-b-2 border-transparent font-semibold relative leading-tight after:w-2.5 after:h-2.5 after:border-3 after:border-white after:bg-transparent after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:translate-y-1/2 after:z-10 after:rounded-full">
                      Floor 1.
                    </span>
                  </div>

                  <div>
                    <div className="block opacity-100">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12">
                        <div className="lg:col-start-1 lg:col-span-7">
                          <img
                            src="https://wpmedia.roomsketcher.com/content/uploads/2022/01/06150346/2-Bedroom-Home-Plan-With-Dimensions.png"
                            alt="Floor Plan"
                            className="w-full"
                          />
                        </div>
                        <div className="lg:col-start-8 lg:col-span-5">
                          <h6 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-heading-color mb-8 leading-tight">
                            Floor Plan Description
                          </h6>
                          <p className="text-sm lg:text-base">
                            <span className="leading-relaxed">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Commodi temporibus quo consequuntur
                              veritatis dolorum aliquid laboriosam aspernatur
                              eum ipsum numquam deserunt tempore, aut id! Ad
                              delectus odio nisi ea exercitationem.
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="ontainer mx-auto p-5 pt-2.5 pb-2.5 bg-section-bg-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-8 gap-y-2.5 mt-12">
                        <div className="lex flex-col items-stretch">
                          <ul className="flex flex-col gap-y-2.5 items-stretch">
                            <li className="text-sm md:text-base font-semibold relative z-0 before:w-full">
                              <ul className="flex justify-between items-center">
                                <li className="leading-relaxed pr-2.5 bg-[#F2F6F7] dark:bg-[#FFC48A] dark:text-black flex justify-center items-center relative w-full md:w-1/2">
                                  Total Area
                                </li>
                                <li className="text-sm md:text-base leading-relaxed pl-2.5 bg-[#F2F6F7] dark:bg-[#FFC48A] dark:text-black flex justify-center items-center relative w-full md:w-1/2">
                                  2800 Sq. Ft
                                </li>
                              </ul>
                            </li>

                            <li className="text-sm md:text-base lg:text-base xl:text-base font-semibold relative z-0 before:w-full">
                              <ul className="flex justify-between items-center">
                                <li className="leading-relaxed pr-2.5 bg-[#F2F6F7] dark:bg-[#FFC48A] dark:text-black flex justify-center items-center relative w-full md:w-1/2">
                                  Bedroom
                                </li>
                                <li className="text-sm md:text-base leading-relaxed pl-2.5 bg-[#F2F6F7] dark:bg-[#FFC48A] dark:text-black flex justify-center items-center relative w-full md:w-1/2">
                                  150 Sq. Ft
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>

                        <div className="flex flex-col items-stretch">
                          <div className="lex flex-col items-stretch">
                            <ul className="flex flex-col gap-y-2.5 items-stretch">
                              <li className="text-sm md:text-base font-semibold relative z-0 before:w-full">
                                <ul className="flex justify-between items-center">
                                  <li className="leading-relaxed pr-2.5 bg-[#F2F6F7] dark:bg-[#FFC48A] dark:text-black flex justify-center items-center w-full md:w-1/2">
                                    Belcony/Pets
                                  </li>
                                  <li className="text-sm md:text-base leading-relaxed pl-2.5 bg-[#F2F6F7] dark:bg-[#FFC48A] dark:text-black flex justify-center items-center w-full md:w-1/2">
                                    Allowed
                                  </li>
                                </ul>
                              </li>

                              <li className="text-sm md:text-base lg:text-base xl:text-base font-semibold relative z-0 before:w-full">
                                <ul className="flex justify-between items-center">
                                  <li className="leading-relaxed pr-2.5 bg-[#F2F6F7] dark:bg-[#FFC48A] dark:text-black flex justify-center items-center w-full md:w-1/2">
                                    Lounge
                                  </li>
                                  <li className="text-sm md:text-base leading-relaxed pl-2.5 bg-[#F2F6F7] dark:bg-[#FFC48A] dark:text-black flex justify-center items-center w-full md:w-1/2">
                                    650 Sq. Ft
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl md:text-2xl font-semibold leading-tight pl-3  text-heading-color my-7">
                      Property Video.
                    </h4>
                    <div className="mb-[60px] md:mb-[40px] sm:mb-[30px] xs:mb-[20px]">
                      <div className="relative z-0 after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-primary-color after:opacity-40 after:z-1 w-full h-auto lg:h-[450px]  md:h-[350px] sm:h-[250px] xs:h-[200px]">
                        <img
                          src="https://html.themewin.com/pixells/quarter-tailwind-preview/quarter/assets/img/others/15.jpg"
                          alt=""
                          width={770}
                          height={500}
                          className="bg-center bg-no-repeat bg-cover"
                        />
                        <div className="absolute left-0 top-0 flex justify-center items-center h-full w-full z-10">
                          <Link
                            href="https://www.youtube.com/watch?v=MLpWrANjFbI"
                            className="glightbox3 w-[50px] h-[50px] lg:w-16 lg:h-16 md:w-15 md:h-15 sm:w-10 sm:h-10 xs:w-8 xs:h-8 text-center text-sm lg:text-base md:text-sm sm:text-xs xs:text-[10px] textshadow-box-shadow-2 rounded-full bg-black flex items-center justify-center"
                            onClick={(e) => {
                              e.preventDefault();
                              setVideoOpen(true);
                            }}
                          >
                            <IoMdPlayCircle className="text-white" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[60vw] sm:w-[50vw] xs:w-[40vw] h-[60vh] md:h-[50vh] sm:h-[40vh] xs:h-[30vh] bg-black bg-opacity-50 z-50 ${
                        videoOpen ? "block" : "hidden"
                      }`}
                    >
                      <div className="relative w-full h-full">
                        <iframe
                          width="100%"
                          height="100%"
                          src="https://www.youtube.com/embed/MLpWrANjFbI"
                          frameBorder="0"
                          allowFullScreen
                        />
                        <button
                          className="absolute top-[-2rem] right-[-2px] text-white px-2 py-2 bg-[#4B70F5] dark:bg-[#FFC48A] cursor-pointer rounded-full"
                          onClick={() => setVideoOpen(false)}
                        >
                          <MdOutlineClose className="text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-start-9 lg:col-span-4 pt-[60px] lg:pt-0">
              <div className="px-5 pt-[35px] pb-10 xl:pl-[35px] xl:pr-[30px] mb-10 border-2 rounded-md">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-[25px]">
                    <img
                      src="/images/people1.jpg"
                      alt="author"
                      className="w-[140px] h-[140px] rounded-full"
                    />
                  </div>
                  <h4 className="mb-[15px] lg:text-lg text-heading-color font-bold">
                    <span className="leading-4">Rosalina D. Willaimson</span>
                  </h4>
                  <p className="text-[12.25px] lg:text-sm">
                    <span className="leading-4"> Traveller/Photographer </span>
                  </p>

                  <div>
                    <ul className="text-xs flex items-center">
                      <li className="pt-2">
                        <MdOutlineStarPurple500
                          className="text-yellow-600"
                          size={20}
                        />
                      </li>

                      <li className="pt-2">
                        <MdOutlineStarPurple500
                          className="text-yellow-600"
                          size={20}
                        />
                      </li>

                      <li className="pt-2">
                        <MdOutlineStarPurple500
                          className="text-yellow-600"
                          size={20}
                        />
                      </li>

                      <li className="pt-2">
                        <MdOutlineStarHalf
                          className="text-yellow-600"
                          size={20}
                        />
                      </li>

                      <li className="pt-2">
                        <MdOutlineStarBorderPurple500
                          className="text-yellow-600"
                          size={20}
                        />
                      </li>

                      <li className="pt-2 text-yellow-600">( 1 Reviews )</li>
                    </ul>
                  </div>

                  <p className="text-sm mb-[22px] hyphens-none">
                    <span className="leading-4">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nobis, iusto incidunt doloremque totam optio error eveniet
                      est neque architecto? Debitis?
                    </span>
                  </p>
                  <ul className="text-sm lg:text-base flex gap-[18px] justify-center items-center text-color-1">
                    <li className="leading-7">
                      <Link href="#">
                        <MdFacebook />
                      </Link>
                    </li>

                    <li className="leading-7">
                      <Link href="#">
                        <ImTwitter />
                      </Link>
                    </li>

                    <li className="leading-7">
                      <Link href="#">
                        <FaLinkedinIn />
                      </Link>
                    </li>

                    <li className="leading-7">
                      <Link href="#">
                        <AiFillYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="px-5 pt-5 pb-10 xl:pl-10 xl:pr-8 mb-10 border-2 rounded-md md:px-10 lg:px-20 xl:px-30">
                <h4 className="text-lg font-semibold text-heading-color mb-5 xl:mb-8">
                  <span className="leading-1.3 pl-5 xl:pl-10">
                    Search Objects
                  </span>
                </h4>

                <form className="w-full px-4">
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Search your keyword..."
                      className="flex-grow text-paragraph-color text-sm font-semibold bg-section-bg-1 px-4 sm:px-5 md:px-8 outline-none border-2 border-r-0 border-border-color-9 h-10 sm:h-12 xl:h-14 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 block rounded-none"
                    />
                    <button className="flex-shrink-0 text-sm sm:text-base h-10 sm:h-12 xl:h-14 w-12 sm:w-14 xl:w-16 flex items-center justify-center text-white bg-black dark:bg-[#FFC48A] dark:text-black">
                      <FaSearch />
                    </button>
                  </div>
                </form>
              </div>

              <div className="px-5 pt-[35px] pb-10 xl:pl-[35px] xl:pr-[30px] mb-10 border-2 rounded-md">
                <h4 className="text-lg font-semibold text-heading-color mb-[25px]">
                  <span className="pl-[10px] ">Drop Messege For Book</span>
                </h4>

                <form>
                  <div className="grid gap-[30px] mb-10">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className=" px-5 py-15px outline-none border-2 h-[65px] block w-full rounded-none placeholder:text-sm placeholder:text-paragraph-color"
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Your-Email"
                        className=" px-5 py-15px outline-none border-2  h-[65px] block w-full rounded-none placeholder:text-sm placeholder:text-paragraph-color"
                      />
                    </div>

                    <div className="relative">
                      <textarea
                        placeholder="Write Messege..."
                        id="textarea"
                        className="min-h-[150px] text-paragraph-color px-5 py-[15px] outline-none border-2 h-65px block w-full rounded-none placeholder:text-sm"
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <button
                      type="submit"
                      className="col-span-1 w-full  sm:col-span-2 bg-[#A855F7] dark:bg-[#FF885B] dark:text-black font-bold text-white py-2 px-4 rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>

              <div className="px-5 pt-[35px] pb-10 xl:pl-[35px] xl:pr-[30px] mb-10 border-2 rounded-md">
                <h4 className="text-lg font-semibold  mb-[25px]">
                  <span>Top Categories</span>
                </h4>
                <ul>
                  <li>
                    <Link
                      href="#"
                      className="text-sm font-bold flex justify-between items-center group mt-[15px]"
                    >
                      <span>Apartments</span>
                      <span className="leading-5">(26)</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-sm font-bold flex justify-between items-center group mt-[15px]"
                    >
                      <span>Picture Stodio</span>
                      <span className="leading-5">(30)</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-sm font-bold flex justify-between items-center group mt-[15px]"
                    >
                      <span>Office</span>
                      <span className="leading-5">(71)</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-sm font-bold flex justify-between items-center group mt-[15px]"
                    >
                      <span>Luxary Vilas</span>
                      <span className="leading-5">(56)</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-sm font-bold flex justify-between items-center group mt-[15px]"
                    >
                      <span>Duplex House</span>
                      <span className="leading-5">(60)</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="px-5 pt-[35px] pb-10 xl:pl-[35px] xl:pr-[30px] mb-10 border-2 rounded-md">
                <h4 className="text-lg font-semibold text-heading-color mb-[25px]">
                  <span className="leading-4">Leatest Blogs</span>
                </h4>
                <ul>
                  <li className="pb-5 mb-[30px] border-b-2 border-border-color-1">
                    <div className="flex gap-x-5">
                      <div className="w-20 flex-shrink-0">
                        <img src="/images/people1.jpg" alt="johan" />
                      </div>
                      <div>
                        <h6 className="text-sm font-medium mb-[5px]">
                          <Link href="#" className="leading-5">
                            Lorem ipsum dolor sit cing elit, sed do.
                          </Link>
                        </h6>
                        <div className="text-xs md:text-sm font-semibold text-secondary-color">
                          <span>
                            <MdOutlineCalendarMonth /> June 22, 2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="pb-5 mb-[30px] border-b-2 border-border-color-1">
                    <div className="flex gap-x-5">
                      <div className="w-20 flex-shrink-0">
                        <img src="/images/people2.jpg" alt="stivan" />
                      </div>
                      <div>
                        <h6 className="text-sm font-medium mb-[5px]">
                          <Link href="#" className="leading-5">
                            Lorem ipsum dolor sit cing elit, sed do.
                          </Link>
                        </h6>
                        <div className="text-xs md:text-sm font-semibold text-secondary-color">
                          <span>
                            <MdOutlineCalendarMonth /> June 22, 2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="pb-5 mb-[30px] border-b-2 border-border-color-1">
                    <div className="flex gap-x-5">
                      <div className="w-20 flex-shrink-0">
                        <img src="/images/people3.jpg" alt="milly" />
                      </div>
                      <div>
                        <h6 className="text-sm font-medium mb-[5px]">
                          <Link href="#" className="leading-5">
                            Lorem ipsum dolor sit cing elit, sed do.
                          </Link>
                        </h6>
                        <div className="text-xs md:text-sm font-semibold text-secondary-color">
                          <span>
                            <MdOutlineCalendarMonth /> June 22, 2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="pb-5 mb-[30px] border-b-2 border-border-color-1">
                    <div className="flex gap-x-5">
                      <div className="w-20 flex-shrink-0">
                        <img src="/images/people4.jpg" alt="kelly" />
                      </div>
                      <div>
                        <h6 className="text-sm font-medium mb-[5px]">
                          <Link href="#" className="leading-5">
                            Lorem ipsum dolor sit cing elit, sed do.
                          </Link>
                        </h6>
                        <div className="text-xs md:text-sm font-semibold text-secondary-color">
                          <span>
                            <MdOutlineCalendarMonth /> June 22, 2024
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="px-5 pt-[35px] pb-10 xl:pl-[35px] xl:pr-[30px] border-2 rounded-md">
                <h4 className="text-lg font-semibold text-heading-color mb-[30px]">
                  <span>Popular Tags</span>
                </h4>
                <ul className="flex gap-[10px] flex-wrap items-center">
                  <li>
                    <Link
                      href="#"
                      className="text-[13px] px-6 py-2 leading-1.8 bg-section-bg-1 bg-[#F2F6F7] rounded-md dark:bg-[#FFC48A] dark:text-black flex items-center justify-center font-bold"
                    >
                      POPULAR
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-[13px] px-6 py-2 leading-1.8 bg-section-bg-1 bg-[#F2F6F7] rounded-md dark:bg-[#FFC48A] dark:text-black flex items-center justify-center font-bold"
                    >
                      DESGIN
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-[13px] px-6 py-2 leading-1.8 bg-section-bg-1 bg-[#F2F6F7] rounded-md dark:bg-[#FFC48A] dark:text-black flex items-center justify-center font-bold"
                    >
                      UX
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-[13px] px-6 py-2 leading-1.8 bg-section-bg-1 bg-[#F2F6F7] rounded-md dark:bg-[#FFC48A] dark:text-black flex items-center justify-center font-bold"
                    >
                      USABILITY
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-[13px] px-6 py-2 leading-1.8 bg-section-bg-1 bg-[#F2F6F7] rounded-md dark:bg-[#FFC48A] dark:text-black flex items-center justify-center font-bold"
                    >
                      DEVELOP
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-[13px] px-6 py-2 leading-1.8 bg-section-bg-1 bg-[#F2F6F7] rounded-md dark:bg-[#FFC48A] dark:text-black flex items-center justify-center font-bold"
                    >
                      ICON
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-[13px] px-6 py-2 leading-1.8 bg-section-bg-1 bg-[#F2F6F7] rounded-md dark:bg-[#FFC48A] dark:text-black flex items-center justify-center font-bold"
                    >
                      CAR
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-[13px] px-6 py-2 leading-1.8 bg-section-bg-1 bg-[#F2F6F7] rounded-md dark:bg-[#FFC48A] dark:text-black flex items-center justify-center font-bold"
                    >
                      SERVICE
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-[13px] px-6 py-2 leading-1.8 bg-section-bg-1 bg-[#F2F6F7] rounded-md dark:bg-[#FFC48A] dark:text-black flex items-center justify-center font-bold"
                    >
                      REPAIRS
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-[13px] px-6 py-2 leading-1.8 bg-section-bg-1 bg-[#F2F6F7] rounded-md dark:bg-[#FFC48A] dark:text-black flex items-center justify-center font-bold"
                    >
                      AUTO PARTS
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-[13px] px-6 py-2 leading-1.8 bg-section-bg-1 bg-[#F2F6F7] rounded-md dark:bg-[#FFC48A] dark:text-black flex items-center justify-center font-bold"
                    >
                      OIL
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-[13px] px-6 py-2 leading-1.8 bg-section-bg-1 bg-[#F2F6F7] rounded-md dark:bg-[#FFC48A] dark:text-black flex items-center justify-center font-bold"
                    >
                      DEALER
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-[13px] px-6 py-2 leading-1.8 bg-section-bg-1 bg-[#F2F6F7] rounded-md dark:bg-[#FFC48A] dark:text-black flex items-center justify-center font-bold"
                    >
                      OIL CHANGE
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="#"
                      className="text-[13px] px-6 py-2 leading-1.8 bg-section-bg-1 bg-[#F2F6F7] rounded-md dark:bg-[#FFC48A] dark:text-black flex items-center justify-center font-bold"
                    >
                      BODY COLOR
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailPage;
