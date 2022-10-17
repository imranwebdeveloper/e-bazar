import React from "react";

const Search = () => {
  return (
    <div className="flex-1 flex  max-w-[600px] mx-auto ">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search here..."
        className=" bg-slate-100 p-2 w-full outline-none rounded-l"
      />
      <span className="text-orange-800 bg-orange-300 px-4 flex items-center rounded-r cursor-pointer ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
    </div>
  );
};

export default Search;
