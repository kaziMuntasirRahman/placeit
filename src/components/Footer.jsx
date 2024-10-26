import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = ['Home', 'About Us', 'Services', 'Blog', 'Contact Us'];
  return (
    <div className="w-full bg-bgPrimary  text-white flex justify-between items-center px-[370px] py-8 font-normal">
      <p className="text-lg font-yantramanav">&copy; Copyright 2018 All rights reserved – Design By Yogs Themes</p>
      <div className="flex">
        {
          quickLinks.map((link, index) =>
            <Link
              to={link}
              key={index}
              className={`text-primaryColor hover:text-white transition-all duration-500 px-4 text-sm leading-none font-yantramanav ${index !== 0 && 'border-l-[1px] border-primaryColor'}`}
            >{link.toUpperCase()}</Link>)
        }
      </div>
    </div>
  );
};

export default Footer;