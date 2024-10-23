import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navLinks, setNavLinks] = useState([]);
  useEffect(() => {
    fetch('data/NavLinks.json')
      .then(res => res.json())
      .then(data => setNavLinks(data))
    console.log(navLinks)
  }, [])

  const baseNavLinkStyle = 'font-raleway block size-auto text-white px-3 pt-5 pb-6 duration-75';

  return (
    <nav className="bg-bgPrimary w-full">
      <section>
        <p className="text-white text-sm font-medium font-primaryFont">
          email us at: sales@yourwebsite.com
        </p>
      </section>
      <section className="">
        <div className="flex items-center gap-px w-[1200px] mx-auto">
          <img src="images/logo.png" className="mr-auto" />
          {
            navLinks.map((navLink, index) =>
              <div className="dropdown dropdown-hover">
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
                          className={`font-raleway block bg-primaryColor text-white !px-[25px] !py-[9px] min-w-[260px] h-full !w-full hover:bg-bgPrimary duration-700 hover:cursor-pointer`}>
                          <a className="rounded-none">{child.toUpperCase()}</a></li>
                      )}
                  </ul>
                }
              </div>
            )}
          <div className="dropdown dropdown-end dropdown-open">
            <FaSearch
              tabIndex={0}
              className="text-white text-lg border-l-2 pl-5 min-w-max ml-3 font-raleway block size-auto py-6 duration-75"
              role="button"
            />
            <ul
              tabIndex={0}
              className="bg-white  dropdown-content z-[1] !min-w-max shadow border border-t-4 border-primaryColor space-y-px"
            >
              <li
                className="font-raleway block text-white p-5 min-w-[260px] h-full !w-full duration-700 hover:cursor-pointer">
                <label
                  className="!h-10 input flex items-center rounded-none gap-2 !focus:border-none !focus:outline-none !outline-none !border-none">
                  <input
                    type="text"
                    className="!h-10 w-full px-5 border  focus:border-primaryColor placeholder:text-black"
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