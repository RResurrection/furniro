import { NextResponse } from "next/server";
import { categories } from "@/utils/mock/home-categories/categories.json";

export const GET = () => {
  return NextResponse.json(categories);
};
