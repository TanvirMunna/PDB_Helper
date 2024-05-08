import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../../Components/Loading";
import NewPost from "../NewPost/NewPost";

const Categories = () => {
  const [selectedCat, setSelectedCat] = useState(""); // Define selectedCat state
  const { data: brands, isLoading } = useQuery({
    queryKey: ["brands"],
    queryFn: async () => {
      const res = await fetch(
        "https://smart-resale-stall-server.vercel.app/brands"
      );
      const data = await res.json();
      return data;
    },
  });

  const { data: products } = useQuery({
    queryKey: ["addedProducts"],
    queryFn: async () => {
      const res = await fetch(
        "https://smart-resale-stall-server.vercel.app/addedProducts",
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  const catHandler = (catValue) => {
    setSelectedCat(catValue); // Update selectedCat state with the clicked category
  };
  // Filter products based on selected category
  const filteredProducts = selectedCat
    ? products.filter((product) => product.level === selectedCat)
    : products;
  console.log(filteredProducts);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold my-7">Sort The Post</h1>
      <div className="flex border-dotted border-2 border-sky-500 gap-x-7 p-3 rounded-md bg-[#a8dadc]">
        {brands?.map((brand) => (
          <div key={brand._id}>
            <div
              className="cursor-pointer border-2 border-solid border-blue-400 rounded-md p-2"
              title={brand.brand}
            >
              <button
                onClick={() => catHandler(brand.cat)}
                className="text-xl md:text-2xl font-semibold hover:underline"
              >
                <img
                  className="hidden md:block w-[200px] h-[200px]"
                  src={brand.imgURL}
                  alt=""
                />

                {brand.cat}
              </button>
            </div>
          </div>
        ))}
      </div>
      <NewPost
        products={filteredProducts ? filteredProducts : products}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Categories;
