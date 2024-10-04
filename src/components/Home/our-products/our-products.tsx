"use client";

import { getProducts } from "@/actions/actions";
import CardProducts from "@/components/shared/CardProducts";
import Title from "@/components/shared/Title";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import SkeletonCategoty from "../browse-range/SkeletonCategoty";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OurProducts = () => {
  const {
    data: products = [],

    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div className="max-w-screen-xl mx-auto mb-[100px]">
      <Title
        title="Our Products"
        className="text-center text-[40px] font-bold mb-[32px] mt-[57px]"
      />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      {isLoading && (
        <div className="flex items-center gap-[48px] justify-center">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <SkeletonCategoty key={index} />
            ))}
        </div>
      )}

      {isSuccess && (
        <div>
          <div className="flex items-center gap-[32px] justify-between flex-wrap">
            {products.map((product, mapIndex) => (
              <CardProducts key={product.id} {...product} index={mapIndex} />
            ))}
          </div>

          <Link
            href="/shop"
            className="flex justify-center items-center px-[10px] py-[9px] font-semibold  border-2 border-yellow-500 text-[16px] text-[#B88E2F] max-w-[245px] max-h-[48px] mx-auto"
          >
            Show More
          </Link>
        </div>
      )}
    </div>
  );
};

export default OurProducts;
