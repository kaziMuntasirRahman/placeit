import { GiHomeGarage } from "react-icons/gi";
import { LiaBathSolid, LiaBedSolid } from "react-icons/lia";
import { RxRulerSquare } from "react-icons/rx";

const iconsStyle = "flex items-center text-[#777777] text-base gap-2 font-yantramanav";
const badgeStyle = "absolute text-white px-[25px] py-2 font-yantramanav font-semibold";

const PropertiesForSaleCart = ({property}) => {
  const {saleOrRent, price, title, location, description, bedrooms, bathrooms, garage, area, image} = property;
  return (
    <div className="flex flex-col items-start w-[370px]">
      <div className="relative">
        <img src={image} />
        <h3 className={`${badgeStyle} bg-[#71b100b3] rounded-ee-[25px] top-0 left-0`}>{saleOrRent}</h3>
        <h3 className={`${badgeStyle} bg-[#000000b3] rounded-ss-[10px] right-0 bottom-0`}>${price}</h3>
      </div>
      <h1 className="mt-[22px] mb-[5px] text-lg font-bold hover:text-primaryColor cursor-pointer">{title}</h1>
      <h4 className="text-sm font-bold text-primaryColor">{location}</h4>
      <p className="text-start mt-3.5 mb-5 text-[#777777] font-yantramanav">{description.length>100 ? `${description.slice(0,100)}...` : description}</p>
      <section className="flex gap-8 bg-slate-200 w-full py-3 px-5 rounded-sm">
        <div className={iconsStyle}>
          <LiaBedSolid />
          <p>{bedrooms}</p>
        </div>
        <div className={iconsStyle}>
          <LiaBathSolid />
          <p>{bathrooms}</p>
        </div>
        <div className={iconsStyle}>
          <GiHomeGarage />
          <p>{garage}</p>
        </div>
        <div className={`${iconsStyle} ml-auto`}>
          <RxRulerSquare />
          <p>{area} Square</p>
        </div>
      </section>
    </div>
  );
};

export default PropertiesForSaleCart;