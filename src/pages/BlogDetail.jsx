import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

const Blogs = () => {
  return (
    <>
      <section id="Blog" className="py-[80px] pt-40">
        <div className="flex justify-center items-center">
          <span className="flex justify-center items-center sm:text-4xl text-black dark:text-white font-black text-3xl md:text-4xl lg:text-4xl text-center z-20 relative mb-8">
            Blog Details
          </span>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="col-span-1 lg:col-span-8">
              <img
                src="/images/Properties1.jpg"
                className="w-full h-auto object-cover rounded-lg"
                alt=""
              />

              <div className="mt-6 mb-4">
                <span className="block text-sm text-secondary mb-4">
                  Morgan Smith on 20 May, 22
                </span>
                <h2 className="font-lora text-2xl lg:text-3xl text-primary mb-2 font-medium">
                  How To Estimate Your Rental Property Expenses.
                </h2>
                <p className="text-base leading-relaxed">
                  Huge number of propreties availabe here for buy, sell and
                  Rent. Also you find here co-living property, lots opportunity
                  you have to choose here and enjoy huge discount you can get.
                  These cases are perfectly simpl and easy to distinguish. In a
                  free hour, when our power of choice is untrammelled and when
                  nothing prev ents our being able to do what we like best,
                  every pleasure is to be welcomed and every pain avoided are
                  cases are perfectly simple and easy to distinguish. In a free
                  hour, when our power of choice
                </p>
              </div>

              <div className="xl:flex justify-between gap-4 mb-6 items-center">
                <div className="grid grid-cols-2 gap-4 mb-6 xl:mb-0">
                  <img
                    src="/images/Properties1.jpg"
                    className="w-full h-auto object-cover rounded-md"
                    alt=""
                  />

                  <img
                    src="/images/Properties1.jpg"
                    className="w-full h-auto object-cover rounded-md"
                    alt=""
                  />

                  <img
                    src="/images/Properties1.jpg"
                    className="w-full h-auto object-cover rounded-md"
                    alt=""
                  />

                  <img
                    src="/images/Properties1.jpg"
                    className="w-full h-auto object-cover rounded-md"
                    alt=""
                  />
                </div>

                <p className="xl:max-w-xs text-base leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                  aliquid iure porro facere velit corporis temporibus
                  perspiciatis impedit possimus quasi vel voluptatem ipsum
                  itaque, deserunt, voluptate neque iusto obcaecati nemo alias a
                  veniam perferendis! Dolore quisquam blanditiis minima, ad
                  maxime a inventore, totam tenetur aliquid provident sint
                  accusamus soluta ipsa tempore distinctio consequuntur illo ex
                  fugit. Nisi libero atque fugit, accusantium praesentium eos
                  dolore quidem dicta temporibus, aut voluptatum est?
                </p>
              </div>

              <blockquote className="text-secondary leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                sunt eos inventore quia sint quod? Nulla veniam itaque eaque
                temporibus. Iusto corrupti voluptatum, culpa omnis reprehenderit
                quo natus eveniet nemo cum, impedit repellat perferendis nam!
                Earum magni ab aperiam, obcaecati architecto ea corrupti
                numquam, non minus sequi ex voluptas. Vero.
              </blockquote>

              <p className="text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                nulla laboriosam eligendi qui cumque architecto. Nemo nam,
                eveniet sed quibusdam laborum accusamus nostrum. Quidem quia
                aliquam blanditiis atque placeat aspernatur commodi, saepe,
                ducimus consequatur corporis quam, possimus cupiditate adipisci
                iusto nisi rerum ut. Dolores unde temporibus ex? Voluptate,
                quidem dolorem. Quasi dolor nihil error, tenetur dicta
                doloremque? Sequi, nisi consequatur.
              </p>

              <div className="flex flex-wrap items-center justify-between mt-4 mb-4 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap items-center">
                  <span className="text-secondary">Tags:</span>
                  <Link
                    href="#"
                    className="ml-2 text-secondary hover:text-secondary"
                  >
                    Real Estate,
                  </Link>

                  <Link
                    href="#"
                    className="ml-2 text-secondary hover:text-secondary"
                  >
                    Home,
                  </Link>

                  <Link
                    href="#"
                    className="ml-2 text-secondary hover:text-secondary"
                  >
                    Appartment,
                  </Link>

                  <Link
                    href="#"
                    className="ml-2 text-secondary hover:text-secondary"
                  >
                    Duplex Villa
                  </Link>
                </div>

                <div className="flex flex-wrap items-center">
                  <span className="text-secondary mr-2">Share:</span>
                  <ul className="flex items-center space-x-3">
                    <li>
                      <Link
                        href="#"
                        className="text-[#3B5998] hover:text-[#3B5998]"
                      >
                        <FaFacebook size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-[#1DA1F2] hover:text-[#1DA1F2]"
                      >
                        <FaTwitter size={20} />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="text-[#E4405F] hover:text-[#E4405F]"
                      >
                        <RiInstagramFill size={20} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="font-lora text-2xl capitalize font-medium">
                  Feedback.
                </h2>

                <ul className="mt-8 space-y-6">
                  <li className="flex flex-col sm:flex-row items-start">
                    <img
                      src="/images/people3.jpg"
                      className="mr-4 w-20 h-20 rounded-full"
                      alt="Commentor"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium mb-2 relative gap-2">
                        Eleanor Pena,
                      </h4>
                      <span className="text-sm relative bottom-2">
                        20 Jan, 2022
                      </span>
                      <p className="text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Explicabo omnis recusandae doloribus inventore
                        facere harum architecto quos ipsam ipsum sapiente.
                      </p>
                      <p className="mt-2">
                        <Link href="#" className="mr-4 hover:underline">
                          Like
                        </Link>
                        <Link href="#" className=" hover:underline">
                          Reply
                        </Link>
                      </p>
                    </div>
                  </li>

                  <li className="flex flex-col sm:flex-row items-start">
                    <img
                      src="/images/people4.jpg"
                      className="mr-4 w-20 h-20 rounded-full"
                      alt="Commentor"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium mb-2">
                        Kathryn Murphy,
                      </h4>
                      <span className="text-sm relative bottom-2">
                        20 Jan, 2022
                      </span>
                      <p className="text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Explicabo omnis recusandae doloribus inventore
                        facere harum architecto quos ipsam ipsum sapiente.
                      </p>
                      <p className="mt-2">
                        <Link href="#" className="mr-4 hover:underline">
                          Like
                        </Link>
                        <Link href="#" className="hover:underline">
                          Reply
                        </Link>
                      </p>
                    </div>
                  </li>

                  <li className="flex flex-col sm:flex-row items-start">
                    <img
                      src="/images/people2.jpg"
                      className="mr-4 w-20 h-20 rounded-full"
                      alt="Commentor"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium mb-2">
                        Stela Flemming,
                      </h4>
                      <span className="text-sm relative bottom-2">
                        20 Jan, 2022
                      </span>
                      <p className="text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Explicabo omnis recusandae doloribus inventore
                        facere harum architecto quos ipsam ipsum sapiente.
                      </p>
                      <p className="mt-2">
                        <Link href="#" className="mr-4 hover:underline">
                          Like
                        </Link>
                        <Link href="#" className="hover:underline">
                          Reply
                        </Link>
                      </p>
                    </div>
                  </li>
                </ul>

                <h2 className="font-lora text-primary text-2xl capitalize mt-10 font-medium underline">
                  Leave a Message.
                </h2>

                <form
                  action="#"
                  className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="col-span-1 w-full dark:bg-[#17202A] hover:border-[#FD6400] border-2 border-primary border-opacity-60 rounded-md p-2"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    className="col-span-1 w-full dark:bg-[#17202A] hover:border-[#FD6400] border-2 border-primary border-opacity-60 rounded-md p-2"
                  />
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="col-span-1 w-full dark:bg-[#17202A] hover:border-[#FD6400] border-2 border-primary border-opacity-60 rounded-md p-2"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="col-span-1 w-full dark:bg-[#17202A] hover:border-[#FD6400] border-2 border-primary border-opacity-60 rounded-md p-2"
                  />

                  <textarea
                    placeholder="Message"
                    className="col-span-1 sm:col-span-2 w-full dark:bg-[#17202A] hover:border-[#FD6400] border-2 border-primary border-opacity-60 rounded-md p-2 h-32 resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="col-span-1 sm:col-span-2 bg-[#A855F7] dark:bg-[#FF885B] dark:text-black font-bold text-white py-2 px-4 rounded-md"
                  >
                    Contact Us
                  </button>
                </form>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-4">
              <aside className="space-y-6">
                <div>
                  <h3 className="text-xl underline mb-4">Search.</h3>
                  <form action="#" className="relative">
                    <input
                      type="text"
                      placeholder="Keywords here..."
                      className="w-full border-gray-300 rounded-md p-2 pr-10 hover:border-[#FD6400] border-2 border-primary border-opacity-60"
                    />
                    <button className="absolute top-1/2 right-3 transform -translate-y-1/2">
                      <FaSearch />
                    </button>
                  </form>
                </div>

                <div className="mb-[40px] flex flex-col">
                  <h3 className="text-primary text-xl font-lora underline mb-4">
                    Categories.
                  </h3>
                  <div className="block mb-[-25px]">
                    <Link
                      href="#"
                      className="font-light leading-[1.75] border-2 border-primary border-opacity-60 rounded-[8px] pr-[20px] pl-[20px] py-[10px] hover:border-[#FD6400] hover:border-opacity-60 flex flex-wrap items-center justify-between mb-8"
                    >
                      <span>Appartment</span>
                      <span>35</span>
                    </Link>

                    <Link
                      href="#"
                      className="font-light leading-[1.75] border-2 border-primary border-opacity-60 rounded-[8px] pr-[20px] pl-[20px] py-[10px] hover:border-[#FD6400] hover:border-opacity-60 flex flex-wrap items-center justify-between mb-8"
                    >
                      <span>Family House</span>
                      <span>50</span>
                    </Link>

                    <Link
                      href="#"
                      className="font-light leading-[1.75] border-2 border-primary border-opacity-60 rounded-[8px] pr-[20px] pl-[20px] py-[10px] hover:border-[#FD6400] hover:border-opacity-60 flex flex-wrap items-center justify-between mb-8"
                    >
                      <span>Duplex Villa</span>
                      <span>38</span>
                    </Link>

                    <Link
                      href="#"
                      className="font-light leading-[1.75] border-2 border-primary border-opacity-60 rounded-[8px] pr-[20px] pl-[20px] py-[10px] hover:border-[#FD6400] hover:border-opacity-60 flex flex-wrap items-center justify-between mb-8"
                    >
                      <span>Farm House</span>
                      <span>14</span>
                    </Link>

                    <Link
                      href="#"
                      className="font-light leading-[1.75] border-2 border-primary border-opacity-60 rounded-[8px] pr-[20px] pl-[20px] py-[10px] hover:border-[#FD6400] hover:border-opacity-60 flex flex-wrap items-center justify-between mb-8"
                    >
                      <span>Condo</span>
                      <span>12</span>
                    </Link>
                  </div>
                </div>

                <div className="mb-[40px]">
                  <h3 className="text-primary text-xl font-lora underline mb-4">
                    Popular Post.
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-x-[30px] md:gap-x-[0px] relative">
                    <div className="flex items-center mb-[20px]">
                      <div className="relative w-[127px]">
                        <Link href="#" className="block w-full">
                          <img
                            src="/images/Properties1.jpg"
                            className="w-full"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="text-left w-[calc(100%-151px)] ml-6">
                        <span className="block leading-none font-light text-[12px] text-secondary mb-[8px]">
                          22 June, 2022
                        </span>
                        <h3>
                          <Link
                            href="#"
                            className="font-lora text-[16px] leading-[1.285] text-primary hover:text-secondary transition-all"
                          >
                            Home Buying Process: A Comprehensive Guide.
                          </Link>
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center text-center">
                      <div className="relative w-[127px]">
                        <Link href="#" className="block w-full">
                          <img
                            src="/images/Properties2.jpg"
                            className="w-full"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="text-left w-[calc(100%-151px)] ml-6">
                        <span className="block leading-none font-light text-[12px] text-secondary mb-[8px]">
                          18 May, 2022
                        </span>
                        <h3>
                          <Link
                            href="#"
                            className="font-lora text-[16px] leading-[1.285] text-primary hover:text-secondary transition-all"
                          >
                            10 of the highest ROI Home Improvement Projects.
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-[40px] flex flex-col">
                  <h3 className="text-primary text-xl font-lora underline mb-4">
                    Archives.
                  </h3>
                  <div className="block mb-[-25px]">
                    <Link
                      href="#"
                      className="font-light leading-[1.75] border-2 border-primary border-opacity-60 rounded-[8px] pr-[20px] pl-[20px] py-[10px] hover:border-[#FD6400] hover:border-opacity-60  flex flex-wrap items-center justify-between mb-8"
                    >
                      <span>January, 2022 </span>
                      <span>35</span>
                    </Link>

                    <Link
                      href="#"
                      className="font-light leading-[1.75] border-2 border-primary border-opacity-60 rounded-[8px] pr-[20px] pl-[20px] py-[10px] hover:border-[#FD6400] hover:border-opacity-60  flex flex-wrap items-center justify-between mb-8"
                    >
                      <span>December, 2021</span>
                      <span>50</span>
                    </Link>

                    <Link
                      href="#"
                      className="font-light leading-[1.75] border-2 border-primary border-opacity-60 rounded-[8px] pr-[20px] pl-[20px] py-[10px] hover:border-[#FD6400] hover:border-opacity-60  flex flex-wrap items-center justify-between mb-8"
                    >
                      <span>November, 2021</span>
                      <span>38</span>
                    </Link>

                    <Link
                      href="#"
                      className="font-light leading-[1.75] border-2 border-primary border-opacity-60 rounded-[8px] pr-[20px] pl-[20px] py-[10px] hover:border-[#FD6400] hover:border-opacity-60  flex flex-wrap items-center justify-between mb-8"
                    >
                      <span>October, 2021</span>
                      <span>14</span>
                    </Link>

                    <Link
                      href="#"
                      className="font-light leading-[1.75] border-2 border-primary border-opacity-60 rounded-[8px] pr-[20px] pl-[20px] py-[10px] hover:border-[#FD6400] hover:border-opacity-60  flex flex-wrap items-center justify-between mb-8"
                    >
                      <span>September, 2021</span>
                      <span>12</span>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
