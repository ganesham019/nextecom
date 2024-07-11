import React from "react";
import { Card } from "@/components/Card";

export async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <section className="flex justify-evenly items-center flex-wrap gap-6 p-10">
      {data.map((product, id) => (
        <Card data={product} key={id} />
      ))}
    </section>
  );
}
