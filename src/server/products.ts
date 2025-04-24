"use server";

import { Product } from "@/shared/types";
import { unstable_cache } from "next/cache";
interface getProductsParams {
  search?: string;
  perPage?: number;
}

export const getProducts = unstable_cache(
  async ({ search, perPage }: getProductsParams): Promise<Product[]> => {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/products?title=${search}&offset=0&limit=${perPage}`
    );
    const data = await res.json();
    return data;
  },
  ["products"],
  {
    tags: ["products"],
  }
);
