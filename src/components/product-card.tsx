import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/shared/types";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
interface ProductProps {
  product: Product;
}
export default function ProductCard({ product }: ProductProps) {
  const imageUrl = product.images[0].startsWith("http")
    ? product.images[0]
    : `https://i.imgur.com/${product.images[0]}`;
  return (
    <Card
      key={product.id}
      className="p-0 pb-4 flex flex-col gap-4 justify-between"
    >
      <CardHeader className="p-0 relative">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <Badge className="absolute top-1 left-2">{product.category.name}</Badge>
        <div className="px-6 py-0 pt-4">
          <CardTitle>{product.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 py-0">
        <p className="text-xl font-bold">${product.price}</p>
        <CardDescription>{product.description.slice(0, 80)}...</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>
          <ShoppingCart className="size-4 " />
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
