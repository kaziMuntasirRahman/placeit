import { useEffect, useState } from "react";

const BestAgents = () => {
  const [agents, setAgents] = useState([]);

  useEffect(()=>{
    fetch('data/bestAgents.json')
    .then(res=>res.json())
    .then(data=>setAgents(data))
  }, [])
  console.log(agents);
  
  return (
    <div className="flex flex-col text-center mt-[85px] mb-[60px] px-[370px]">
      <p className="home-section-title">Meet Our Agents</p>
      <h2 className="home-section-heading">Our Best Agents</h2>
      <div className="mx-auto bg-black w-[50px] h-1 mb-[70px]">
        <div className="bg-primaryColor w-1/2 h-full ml-auto" />
      </div>

    </div>
  );
};

export default BestAgents;