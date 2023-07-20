import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import ytLogob from "../images/yt-logo-b.png";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10  font-roboto flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}

      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-black text-xl dark:text-white" />
            ) : (
              <SlMenu className="text-black text-xl dark:text-white" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center box-border">
          <img
            className="h-full hidden dark:md:block"
            src={ytLogo}
            alt="Youtube"
          />
          <div className="dark:hidden">
            <img className="h-10 hidden md:block" src={ytLogob} alt="Youtube" />
          </div>
          <img className="h-full md:hidden" src={ytLogoMobile} alt="Youtube" />
        </Link>
      </div>
      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#a1a1a1] dark:border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="dark:text-white text-xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none dark:text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px] placeholder:text-gray-500 dark:placeholder:text-[#747474]"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#a1a1a1] dark:border-[#303030] rounded-r-3xl bg-black/[0.1] dark:bg-white/[0.1]">
          <IoIosSearch className="dark:text-white text-xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-black/[0.1] hover:bg-black/[0.3] dark:hover:bg-[#303030]/[0.6]">
            <RiVideoAddLine className="dark:text-white text-xl cursor-pointer" />
          </div>
          <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full bg-black/[0.1] hover:bg-black/[0.3] dark:hover:bg-[#303030]/[0.6]">
            <FiBell className="dark:text-white text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-10 w-10 dark:h-9 dark:w-9 overflow-hidden rounded-full md:ml-4 border border-black-200 dark:border-none">
          <img src="https://xsgames.co/randomusers/assets/avatars/pixel/11.jpg" alt="DP"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
