"use client";
import Ratings from "@/components/Ratings";
import { getDiscountedPrice } from "@/utils/utility";

import Link from "next/link";
import { useState } from "react";
import data from "../../../data/products.json";
const productsData = data.products;

export default function Product({ params }) {
  const id = parseInt(params.id);
  const productData = productsData.find((product) => product.id === id);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <img
              src={productData.images[selectedImageIndex]}
              className="w-[400px] h-[500px] mx-auto object-cover"
              alt={productData.title}
              width={400}
              height={500}
            />
            <div className="flex gap-4 mt-4">
              {productData.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  className={`w-[100px] h-[100px] mx-auto border object-cover cursor-pointer ${
                    index === selectedImageIndex ? "border-blue-500" : ""
                  } hover:scale-105 transform transition duration-300`}
                  alt={productData.title}
                  width={100}
                  height={100}
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {productData.title}
            </h1>
            <span className="text-[#919090] my-3">
              <Link href={`/category/${productData.category}`}>
                {productData.category}
              </Link>
            </span>
            <Ratings rating={productData.rating} />
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${productData.price}
                </span>
                <span className="font-bold text-2xl">
                  $
                  {getDiscountedPrice(
                    productData.price,
                    productData.discountPercentage
                  )}
                </span>
              </p>
            </div>
            <div>
              <p className="leading-7">{productData.description}</p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - $
                {getDiscountedPrice(
                  productData.price,
                  productData.discountPercentage
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
