import Link from "next/link";
import React, { useEffect } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { useRouter } from "next/router";

const SearchBar = ({
  searchValue,
  setSearchValue,
  searchResults,
  setSearchResults,
}) => {
  const router = useRouter();

  const ref = useDetectClickOutside({
    onTriggered: () => {
      setSearchResults([]);
      setSearchValue("");
    },
  });

  useEffect(() => {
    setSearchResults([]);
    setSearchValue("");
  }, [router.pathname]);

  return (
    <div ref={ref} className="w-full md:mr-10  lg:w-1/2">
      <div className="w-full mx-auto sm:ml-10">
        <div className="relative">
          <div className="h-10 bg-white flex border border-gray-200 rounded items-center">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              name="select"
              id="select"
              className="md:px-4 appearance-none outline-none text-gray-800 w-full"
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
                    <Link
                      href={`/post/${node.slug}`}
                      className="block border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100  font-semibold"
                    >
                      <p className="px-2 py-2 text-sm border-l-4 hover:border-blue-600">
                        {node.title}
                      </p>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
