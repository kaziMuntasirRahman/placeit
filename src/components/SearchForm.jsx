import { useState } from "react";
import { useEffect } from "react";

const SearchForm = () => {
  const [searchItems, setSearchItems] = useState([]);
  useEffect(() => {
    fetch('data/SearchItems.json')
      .then(res => res.json())
      .then(data => setSearchItems(data))
  }, []);

  const search = (e) => {
    e.preventDefault();
  }

  return (
    <div className="px-[370px] flex flex-col">
      <h1 className="text-3xl font-bold pt-3 pb-6 text-center">Search Your Property Now.</h1>
      <form
        onSubmit={search}
        className="bg-[#F7F7F7] flex-1 grid grid-cols-4 items-end justify-items-start gap-4 pt-11 pb-5 px-9">

        {
          searchItems.map((item, index) =>
            <label className="form-control w-[250px]" key={index}>
              <div className="label">
                <span className="label-text text-[#1a1d1f] text-xs font-bold mb-[5px]">{item.name.toUpperCase()}</span>
              </div>
              <select
                className="select w-full border border-gray-300 focus:border-primaryColor outline-none focus:outline-none rounded-none"
                defaultValue={item.defaultValue}>
                {
                  item.values.map((value, index) =>
                    <option value={value} key={index} >{value}</option>
                  )
                }
              </select>
            </label>
          )
        }
        <button className="btn bg-black text-white rounded-none w-[250px]">Search</button>
      </form>

    </div>
  );
};

export default SearchForm;