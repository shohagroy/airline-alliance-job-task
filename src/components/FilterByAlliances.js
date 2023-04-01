import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { airlineSortByDisplay } from "../features/airlines/airLineSlice";

const FilterByAlliances = () => {
  const { activeAirline } = useSelector((state) => state.airline);
  const dispatch = useDispatch();

  const airlineFilterHandelar = (sort) => {
    dispatch(airlineSortByDisplay(sort));
  };
  return (
    <div className="ml-[35px] md:ml-[68px] py-[35px]">
      <h3 className="font-bold text-[20px]">Filter By Alliances</h3>

      <div className="py-[40px] flex">
        <div>
          <input
            onClick={() => airlineFilterHandelar("all")}
            checked={activeAirline === "all"}
            className="cursor-pointer"
            type="checkbox"
            name=""
            id="all"
          />
          <label
            className="text-[15px] cursor-pointer font-semibold pl-[5px]"
            htmlFor="all"
          >
            All
          </label>
        </div>

        <div className="ml-[22px]">
          <input
            onClick={() => airlineFilterHandelar("OW")}
            checked={activeAirline === "OW"}
            className="cursor-pointer"
            type="checkbox"
            name=""
            id="oneWorld"
          />
          <label
            className="text-[15px] cursor-pointer font-semibold pl-[5px]"
            htmlFor="oneWorld"
          >
            One World
          </label>
        </div>

        <div className="ml-[22px]">
          <input
            onClick={() => airlineFilterHandelar("ST")}
            checked={activeAirline === "ST"}
            className="cursor-pointer"
            type="checkbox"
            name=""
            id="skyTeam"
          />
          <label
            className="text-[15px] cursor-pointer font-semibold pl-[5px]"
            htmlFor="skyTeam"
          >
            Sky Team
          </label>
        </div>

        <div className="ml-[22px]">
          <input
            onClick={() => airlineFilterHandelar("SA")}
            checked={activeAirline === "SA"}
            className="cursor-pointer"
            type="checkbox"
            name=""
            id="starAlliances"
          />
          <label
            className="text-[15px] cursor-pointer font-semibold pl-[5px]"
            htmlFor="starAlliances"
          >
            Star Alliances
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterByAlliances;
