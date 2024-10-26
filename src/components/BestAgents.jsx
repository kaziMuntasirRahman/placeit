import { useEffect, useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

const BestAgents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch('data/bestAgents.json')
      .then(res => res.json())
      .then(data => setAgents(data))
  }, []);

  return (
    <div className="flex flex-col text-center mt-[85px] mb-[60px] px-[370px]">
      <p className="home-section-title">Meet Our Agents</p>
      <h2 className="home-section-heading">Our Best Agents</h2>
      <div className="mx-auto bg-black w-[50px] h-1 mb-[70px]">
        <div className="bg-primaryColor w-1/2 h-full ml-auto" />
      </div>
      <section className="flex justify-between w-full">
        {
          agents.map((agent) => (
            <div className="group" key={agent.id}>
              <div className="relative overflow-hidden">
                <img src={agent.image} alt={agent.name} />
                <div id="contacts" className="h-12 w-full bg-black/75 flex items-center justify-center gap-6 text-white text-sm absolute -bottom-12 group-hover:bottom-0 transition-all duration-500 ease-in-out">
                  <FaFacebookF onClick={() => window.open(agent.facebook, "_blank")} className="cursor-pointer hover:text-primaryColor transition-all duration-300 ease-in-out" />
                  <FaTwitter onClick={() => window.open(agent.twitter, "_blank")} className="cursor-pointer hover:text-primaryColor transition-all duration-300 ease-in-out" />
                  <BiLogoGmail onClick={() => window.open(`mailto:${agent.gmail}`)} className="cursor-pointer hover:text-primaryColor transition-all duration-300 ease-in-out" />
                  <FaEarthAmericas onClick={() => window.open(agent.website, "_blank")} className="cursor-pointer hover:text-primaryColor transition-all duration-300 ease-in-out" />
                </div>
              </div>
              <div className="text-center h-[100px] flex flex-col justify-center items-center gap-2 border-[1px] border-[#d8d8d8] shadow-md">
                <h3
                  className="text-[#1a1d1f] cursor-pointer text-lg font-bold hover:text-primaryColor transition-all duration-300"
                >{agent.name}</h3>
                <p
                  className="text-primaryColor text-sm font-yantramanav font-normal"
                >{agent.occupation}</p>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  );
};

export default BestAgents;
