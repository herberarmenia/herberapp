import React, { useState, useEffect } from "react";
import  Link from "next/link";
import {getCategories} from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    getCategories().then((result) => setCategories(result));
  },[])
  console.log(categories, "categories");
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 mt-4">
      <h3 className="text-xl mb-8 fontsemi-bold border-b pb-4">Категории</h3>
      {categories.map((category) => {
        return (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className="cursor-pointer block pb-3 mb-3">
              {category.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
