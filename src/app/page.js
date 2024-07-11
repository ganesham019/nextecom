import { SimpleCardWithLink } from "@/components/SimpleCardWithLink";
export default function Home() {
  let CategoryData = [
    {
      content: "Mens",
      src: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      href: "/products",
      title:"mens"
    },
    {
      content: "Western",
      src: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
      href: "/products",
      title:"Western"
    },
    {
      content: "Women",
      src: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      href: "/products",
      title: "Women",
    },
  ];

  return (
    <>
      <section className="bg-slate-200 p-4 flex justify-center items-center">
        <h1 className="text-gray-700 p-6 text-5xl"> Ecommerce page </h1>
      </section>
      <section className="p-10 flex justify-center items-center">
        {CategoryData.map((data, id) => (
          <SimpleCardWithLink data={data} key={id} />
        ))}
      </section>
    </>
  );
}
