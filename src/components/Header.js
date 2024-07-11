import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="p-1 flex justify-around items-center">
      <div className="">
        <Link href={"/"} className="text-orange-400">
          <Image
            alt="Man drinking coffee"
            className=""
            quality={100}
            src="/fiverr.png"
            width="120"
            height="40"
          />
        </Link>
      </div>

      <Link href={"/home"} className="text-orange-400">
        Home
      </Link>
      <Link href={"/products"} className="text-orange-400">
        Products
      </Link>
    </nav>
  );
};
