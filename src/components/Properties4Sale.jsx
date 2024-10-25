import { useEffect, useState } from "react";
import PropertiesForSaleCart from "./PropertiesForSaleCart";

const Properties4Sale = () => {
  const [propertyForSaleData, setPropertyForSaleData] = useState([]);

  useEffect(() => {
    fetch('data/PropertiesForSale.json')
      .then(res => res.json())
      .then(data => setPropertyForSaleData(data))
  })

  console.log(propertyForSaleData);

  return (
    <div className="bg-gray-50 flex flex-col text-center mt-[85px] mb-[60px] px-[370px]">
      <p className="home-section-title">Our Featured Properties For Sale and Rent</p>
      <h2 className="home-section-heading">Properties For Sale & Rent</h2>
      <div className="mx-auto bg-black w-[50px] h-1 mb-[70px]">
        <div className="bg-primaryColor w-1/2 h-full ml-auto" />
      </div>

      <section className="flex flex-wrap justify-between gap-y-20">
        {
          propertyForSaleData.map((property, index) =>
            <PropertiesForSaleCart property={property} key={property.id} />
          )
        }
      </section>
    </div>
  );
};

export default Properties4Sale;