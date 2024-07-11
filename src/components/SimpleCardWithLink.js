import React from "react";
import Link from "next/link";
import Image from "next/image";

export function SimpleCardWithLink({ data }) {
  return (
    <Link
      href={data.href}
      className="text-gray-600 border-blue-300 border-2  text-center shadow-sm p-4 mr-5"
    >
      <Image
        src={data.src}
        alt={data.title}
        width={500}
        height={500}
        className="h-48 w-full mx-auto text-center md:w-48"
      />
      <p className="text-2xl mt-6">{data.content}</p>
    </Link>
  );
}
