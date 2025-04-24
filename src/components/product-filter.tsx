"use client";
import React from "react";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { parseAsInteger, useQueryState } from "nuqs";
interface ProductFilterProps {
  refetchProducts: () => Promise<void>;
}
export default function ProductFilter({ refetchProducts }: ProductFilterProps) {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [perPage, setperPage] = useQueryState(
    "perPage",
    parseAsInteger.withDefault(10)
  );
  const handleSearch = (value: string) => {
    setSearch(value);
    setTimeout(() => {
      refetchProducts();
    }, 300);
  };
  const handlePerPage = (value: string) => {
    setperPage(Number(value));
    setTimeout(() => {
      refetchProducts();
    }, 300);
  };
  return (
    <div className="flex justify-between">
      <div>
        <Input
          placeholder="Search here..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div>
        <Select
          value={perPage.toString()}
          onValueChange={(value) => handlePerPage(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Per Page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="20">20</SelectItem>
            <SelectItem value="30">30</SelectItem>
            <SelectItem value="40">40</SelectItem>
            <SelectItem value="50">50</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
