import { NextResponse } from "next/server";
import { products } from "@/utils/mock/our-products/products.json";

export const GET = () => {
  return NextResponse.json(products);
};
