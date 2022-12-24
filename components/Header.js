import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  GlobeAltIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

const search = () =>{
  router.push({
    pathname: "/search",
    query: {
      location: searchInput,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      noOfGuests,
    },
  });
   setSearchInput("");
}
  //function resetInput() {} -> alternative syntax for function resetInput
  const resetInput = () => {
    setSearchInput("");
    setNoOfGuests(1);
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
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 
      cursor-pointer my-auto"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          priority="primary"
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
          placeholder={placeholder || "Start your text"}
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
        <p className="sm:pl-4 hidden md:inline cursor-pointer">Become a member</p>
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
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelection}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-5 text-red-400 outline-none text-lg"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
