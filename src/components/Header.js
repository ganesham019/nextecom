import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="p-6 flex justify-start items-center gap-10 bg-pink-300 shadow-sm capitalize">
      <Link href={"/"} className="text-gray-800 text-3xl mr-5">Next Ecommerce</Link>
      <Link href={"/"} className="text-gray-800 font-medium mr-5">
        Home
      </Link>
      <Link href={"/products"} className="text-gray-800 font-medium mr-5">
        Products
      </Link>
      <Link href={"/"} className="text-gray-800 font-medium mr-5">
        contact
      </Link>
      <Link href={"/"} className="text-gray-800 font-medium mr-5">
        sell product
      </Link>
      <Link href={"/"} className="text-gray-800 font-medium ml-auto">
        Cart &#128722;
      </Link>
    </nav>
  );
};
