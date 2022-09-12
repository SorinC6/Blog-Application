import React, { useEffect } from "react";
import useComponentVisible from "../hooks/useComponentVisible";

const SearchBar = ({
  searchValue,
  setSearchValue,
  searchResults,
  setSearchResults,
}) => {
  console.log("searchResults", searchResults);
  const { ref, isComponentVisible } = useComponentVisible(true);

  useEffect(() => {
    if (!isComponentVisible) {
      setSearchResults([]);
      setSearchValue([]);
    }
  }, [isComponentVisible]);

  return (
    <div ref={ref}>
      <div className="w-full mx-auto ml-10">
        <div className="relative">
          <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              name="select"
              id="select"
              className="px-4 appearance-none outline-none text-gray-800 w-full"
            />

            <button
              onClick={() => {
                setSearchValue("");
                setSearchResults([]);
              }}
              className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600"
            >
              <svg
                className="w-4 h-4 mx-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <label
              htmlFor="show_more"
              className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600"
            >
              <svg
                className="w-4 h-4 mx-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </label>
          </div>

          <input
            type="checkbox"
            name="show_more"
            id="show_more"
            className="hidden peer"
            checked
          />
          <div className="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1  z-50">
            {searchResults?.length > 0 &&
              searchResults.map(({ node }) => {
                return (
                  <div className="cursor-pointer group">
                    <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
                      {node.title}
                    </a>
                  </div>
                );
              })}
          </div>
          {/* <div className="absolute rounded shadow bg-white overflow-hidden hidden peer-checked:flex flex-col w-full mt-1 border border-gray-200 z-50">
          <div className="cursor-pointer group">
            <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
              Python
            </a>
          </div>
          <div className="cursor-pointer group border-t">
            <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 border-blue-600 group-hover:bg-gray-100">
              Javascript
            </a>
          </div>
          <div className="cursor-pointer group border-t">
            <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
              Node
            </a>
          </div>
          <div className="cursor-pointer group border-t">
            <a className="block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100">
              PHP
            </a>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
