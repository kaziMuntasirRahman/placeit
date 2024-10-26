import { FaTelegramPlane } from "react-icons/fa";

const FindBestPlace = () => {
  return (
    <div className="relative h-[392px] mt-[85px] mb-[60px]">
      <img src="images/1.jpg" className="h-full w-full object-cover" />
      <div className="absolute left-0 top-0 w-full h-full bg-[#000000]/80 px-[370px] flex justify-between items-center">
        <div className="text-white flex flex-col text-left max-w-[600px] gap-5">
          <h1 className="text-5xl font-bold ">Find Best Place For Living</h1>
          <p className="text-[#bbbbbb] text-lg font-yantramanav">Spend vacations in best hotels and resorts find the great place of your choice using different searching options.</p>
        </div>
        <div className="text-white btn bg-primaryColor border-none rounded-none h-[60px] p-0 gap-0 group">
          <button className="rounded-none w-[178px] h-full text-lg font-yantramanav group-hover:bg-[#0b0b0b] transition-all duration-200 ease-in-out">
            {'Contact Now'.toUpperCase()}
          </button>
          <div className="w-[60px] h-full flex items-center justify-center bg-[#0000001A] group-hover:bg-[#0b0b0b]/80 transition-all duration-200 ease-in-out">
            <FaTelegramPlane className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindBestPlace;