import React from "react";
import Link from "next/link";
import Image from "next/image";
import { join } from "path";

export const Card = ({ data }) => {
  return (
    <div className="shadow-sm border-2 border-pink-300 max-w-64 p-8 h-[32rem] capitalize flex flex-col justify-around items-center">
      <Image className="w-32 h-40" src={data.image} width="100" height="50" alt="img" />
      <h3 className="mt-5 font-semibold ">{data.title.slice(0, 50) + join("...")}</h3>
      <p className="mt-2 text-sm">{data.description.slice(0, 30) + join("...")}</p>
      <p className="mt-2 text-sm">{data.category}</p>
      <p className="mt-3 mb-3 text-sm">In Stock: {data.rating.count}</p>
      <Link className="text-sm bg-pink-300 hover:bg-pink-500 mx-auto p-3 font-bold shadow-md text-center rounded-xl w-3/4" href={`/products/${data.id}`}>Details</Link>
    </div>
  );
};
