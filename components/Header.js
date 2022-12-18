import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelection = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };

  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 
    bg-white drop-shadow-md p-5 md: px-10"
    >
      {/* left */}
      <div
        className="relative flex items-center h-10 
      cursor-pointer my-auto"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle */}
      <div
        className="flex items-center 
          md:border-2 py-2 rounded-full 
          md:shadow-sm"
      >
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 
            bg-transparent outline-none text-sm
            text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your text"
        />
        <SearchIcon
          className="hidden 
           md:inline-flex h-8 bg-red-400
           text-white rounded-full p-2 cursor-pointer
           md:mx-2"
        />
      </div>

      {/* right */}
      <div
        className="flex space-x-4 items-center 
      justify-end text-gray-500"
      >
        <p className="hidden md:inline cursor-pointer">Become a member</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div
          className="flex items-center 
        space-x-2 border-2 p-2 rounded-full"
        >
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelection}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
