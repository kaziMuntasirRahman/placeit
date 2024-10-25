import { useEffect, useState } from "react";
import { FaPinterestP, FaSearch, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoIosMailOpen, IoLogoGoogleplus } from "react-icons/io";
import { IoBasketballOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navLinks, setNavLinks] = useState([]);
  useEffect(() => {
    fetch('data/NavLinks.json')
      .then(res => res.json())
      .then(data => setNavLinks(data))
  }, [])

  const baseNavLinkStyle = 'font-raleway block size-auto text-white px-3 pt-5 pb-6 duration-75';

  return (
    <nav className="bg-bgPrimary w-full">
      <section className="pl-[335px]">
        <div className="border-b border-px border-gray-500 h-[58px] flex items-center w-full text-white font-bold text-lg">
          <div className="flex items-center gap-3">
            <IoIosMailOpen className="text-primaryColor text-xl" />
            <p className="text-white text-sm font-medium font-primaryFont">Email us at : sales@yourwebsite.com</p>
          </div>
          <div id="icons" className="flex items-center gap-7 px-4 ml-auto text-sm">
            <FaFacebookF />
            <FaTwitter />
            <IoLogoGoogleplus />
            <FaPinterestP />
            <IoBasketballOutline />
          </div>
          <div className="h-full flex">
            <div
              className="bg-primaryColor w-7"
              style={{ clipPath: "polygon(100% 0%, 100% 100%, 0 100%, 100% 0)" }}
            />
            <div className="bg-primaryColor h-full flex items-center gap-3 px-10 justify-self-end flex-grow min-w-[550px]">
              <MdPhone />
              <p>1-800-555-1234</p>
            </div>
          </div>
        </div>
      </section>

      {/* second navbar  */}
      <section className="pt-10">
        <div className="flex items-end gap-px w-[1200px] mx-auto">
          <img src="images/logo.png" className="mr-auto pb-4" />
          {
            navLinks.map((navLink, index) =>
              <div className="dropdown dropdown-hover" key={index}>
                <NavLink
                  tabIndex={0}
                  to={navLink.link}

                  className={({ isActive, isPending }) =>
                    isActive
                      ? `${baseNavLinkStyle} bg-primaryColor `
                      : isPending
                        ? `${baseNavLinkStyle} `
                        : `${baseNavLinkStyle} hover:bg-primaryColor duration-500`
                  }
                >
                  {navLink.title.toUpperCase()}</NavLink>
                {navLink.children.length > 0 &&
                  <ul
                    tabIndex={0}
                    className={`bg-white  dropdown-content z-[1] !min-w-max shadow !p-0 border-t-4 border-[#345200] space-y-px`}
                  >
                    {
                      navLink.children.map((child, index) =>
                        <li
                          className={`font-raleway block bg-primaryColor text-white !px-[25px] !py-[9px] min-w-[260px] h-full !w-full hover:bg-bgPrimary duration-700 hover:cursor-pointer`}
                          key={index}
                          >
                          <a className="rounded-none">{child.toUpperCase()}</a></li>
                      )}
                  </ul>
                }
              </div>
            )}
          <div className="dropdown dropdown-end">
            <FaSearch
              tabIndex={0}
              className="text-white text-lg border-l-2 pl-6 min-w-max ml-3 font-raleway block size-auto mb-6 duration-75"
              role="button"
            />
            <ul
              tabIndex={0}
              className="bg-white  dropdown-content z-[1] !min-w-max shadow border border-t-4 border-primaryColor space-y-px"
            >
              <li
                className="font-raleway block text-white px-2 py-5 min-w-[260px] h-full !w-full duration-700 hover:cursor-pointer">
                <label
                  className="!h-10 input flex items-center rounded-none gap-2 !focus:border-none !focus:outline-none !outline-none !border-none">
                  <input
                    type="text"
                    className="!h-10 w-full px-5 border  focus:border-primaryColor text-black font-semibold placeholder:text-black"
                    placeholder="search here" />
                </label>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;