import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories, getPosts } from "../services";
import SearchBar from "./SearchBar";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState("");
  const [posts, setPosts] = useState("");

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
    });
  }, []);

  useEffect(() => {
    if (searchValue?.length > 0) {
      const results = posts.filter(({ node }) => {
        return node?.title
          .trim()
          .toLowerCase()
          .includes(searchValue.trim().toLowerCase());
      });
      console.log("results", results);
      console.log("searchValue", searchValue);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchValue]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  const renderCategories = (position) =>
    categories.map((category, index) => (
      <Link key={index} href={`/category/${category.slug}`}>
        <span
          className={`md:float-${position} mt-3  align-middle text-white mr-4 font-semibold cursor-pointer text-xs lg:text-sm`}
        >
          {category.name}
        </span>
      </Link>
    ));

  return (
    <div className="container mx-auto px-5 mb-8 md:px-10">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="flex flex-col">
          <div>
            <div className="md:float-left flex w-full flex-col sm:flex-row">
              <Link href="/" className="w-40">
                <div className="cursor-pointer font-bold text-3xl text-white">
                  TechBlog
                </div>
              </Link>
              <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
              />
            </div>
            {/* OLNY ON XL to show the category in a row - right side */}
            {/* <div className="hidden md:float-left xl:contents last:mr-0">
              {renderCategories("right")}
            </div> */}
          </div>
          <div className="flex w-full">{renderCategories("left")}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
