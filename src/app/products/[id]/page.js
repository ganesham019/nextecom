import ProductDetails from "@/components/ProductDetails";

export default function ProductPage({ params }) {
  const { id } = params;
  return (
    <section className="flex h-screen justify-center items-center">
      <ProductDetails productId={id} />;
    </section>
  );
}
