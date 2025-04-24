import ProductCard from "@/components/product-card";
import ProductFilter from "@/components/product-filter";
import { getProducts } from "@/server/products";
import { loadSearchParams } from "./searchParams";
import type { SearchParams } from "nuqs/server";
import { revalidateTag } from "next/cache";
type PageProps = {
  searchParams: Promise<SearchParams>;
};
export default async function Home({ searchParams }: PageProps) {
  const { search, perPage } = await loadSearchParams(searchParams);
  const products = await getProducts({ search, perPage });
  async function refetchProducts() {
    "use server";
    revalidateTag("products");
  }
  return (
    <>
      <main className="flex flex-col gap-10 justify-center max-w-6xl mx-auto">
        <h1>Awesome Products</h1>
        <ProductFilter refetchProducts={refetchProducts} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
