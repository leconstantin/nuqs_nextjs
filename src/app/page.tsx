import ProductCard from "@/components/product-card";
import ProductFilter from "@/components/product-filter";
import { getProducts } from "@/server/products";

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <main className="flex flex-col gap-10 justify-center max-w-6xl mx-auto">
        <h1>Awesome Products</h1>
        <ProductFilter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
