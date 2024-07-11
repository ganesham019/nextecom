"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState("");

  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      if (!res.ok) {
        console.log(res);
        throw new Error("Failed to fetch product");
      }
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <>Loading...</>;
  }

  return (
    <div className="max-w-md mx-auto bg-white border-2 border-pink-300 shadow-md rounded-lg overflow-hidden md:max-w-2xl">
      <div className="p-4">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="h-48 w-full mx-auto text-center md:w-48"
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {product.category}
        </div>
        <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
          {product.title}
        </h1>
        <p className="mt-2 text-gray-500">{product.description}</p>
        <p className="mt-2 text-gray-900 font-bold">${product.price}</p>
        <div className="mt-4">
          <span className="text-yellow-500">
            {"★".repeat(product.rating ? Math.round(product.rating.rate) : 0)}
          </span>
          <span className="ml-2 text-green-600">
            {product.rating && product.rating.count} in stock
          </span>
        </div>
        <button className="bg-pink-400  hover:bg-pink-500 text-white font-bold py-2 px-4 mt-5 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
