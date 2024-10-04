export interface CategoriesProps {
  id: number;
  name: string;
  image: string;
}

export interface ProductsProps {
  index?: number;
  id: number;
  name: string;
  description: string;
  price_usd: number;
  original_price_usd: number;
  discount: string;
  currency: string;
  image: string;
}
