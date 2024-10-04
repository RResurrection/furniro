"use client";

import { useStore } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Favorite = () => {
  const products = useStore((state) => state.products);

  const { initializeProducts } = useStore();

  useEffect(() => {
    initializeProducts();
  }, [initializeProducts]);

  return (
    <Link className="flex gap-2" href="/favorite">
      <Image src="/favorite.svg" alt="favorite" width={24} height={24} />
      <span>{products.length}</span>
    </Link>
  );
};

export default Favorite;
