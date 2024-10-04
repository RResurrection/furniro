"use client";

import { useStore } from "@/store/store";
import Image from "next/image";
import { useEffect } from "react";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FavoriteProducts = () => {
  const { products, initializeProducts, deleteFromFav } = useStore();

  useEffect(() => {
    initializeProducts();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto">
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

      {products.length === 0 ? (
        <h1 className="text-center text-[32px] font-bold">
          You don't have any favorite products at the moment
        </h1>
      ) : (
        <div>
          <div className="flex items-center justify-between bg-[#F9F1E7] text-[16px] py-[15px] px-[10px]">
            <span>Product</span>
            <span>Price</span>
          </div>

          {products.map((item) => (
            <div
              className="flex items-center mt-[20px] justify-between"
              key={item.id}
            >
              <div className="flex items-center  gap-4">
                <Image
                  className="rounded-lg"
                  src={item.image}
                  alt={item.name}
                  width={105}
                  height={105}
                />
                <p>{item.description}</p>
              </div>
              <div className="flex gap-[10px]">
                <span>{item.price_usd}$</span>
                <button onClick={() => deleteFromFav(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteProducts;
