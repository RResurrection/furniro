import { CategoriesProps } from "@/models/query-props";
import axios from "axios";

export const getCategories = async () => {
  const { data: categories } = await axios.get<CategoriesProps[]>(
    "http://localhost:3000/api/home-categoies"
  );

  if (!categories) {
    throw new Error("Failed to fetch categories");
  }

  return categories;
};
