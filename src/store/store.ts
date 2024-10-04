import { toast } from "react-toastify";
import { create } from "zustand";

interface Product {
  id: number;
  name: string;
  description: string;
  price_usd: number;
  original_price_usd?: number;
  discount?: string;
  currency: string;
  image: string;
}

interface FavoritesStore {
  products: Product[];
  addToFav: (product: Product) => void;
  deleteFromFav: (id: number) => void;
  initializeProducts: () => void;
}

export const useStore = create<FavoritesStore>((set) => ({
  products: [],

  initializeProducts: () => {
    const favoriteProducts = JSON.parse(
      localStorage.getItem("favoriteProducts") || "[]"
    );
    set({ products: favoriteProducts });
  },

  addToFav: (product) =>
    set((state) => {
      const alreadyAdded = state.products.some(
        (item) => item.id === product.id
      );

      if (alreadyAdded) {
        toast.error("Product already added");
        return state;
      }
      toast.success("Product added to favorite");
      const updatedProducts = [...state.products, product];

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "favoriteProducts",
          JSON.stringify(updatedProducts)
        );
      }

      return { products: updatedProducts };
    }),

  deleteFromFav: (id) =>
    set((state) => {
      const updatedProducts = state.products.filter((item) => item.id !== id);
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "favoriteProducts",
          JSON.stringify(updatedProducts)
        );
      }
      toast.success("Product deleted from favorites");
      return { products: updatedProducts };
    }),
}));
