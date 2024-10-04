import { ProductsProps } from "@/models/query-props";
import Image from "next/image";
import Title from "./Title";
import { useStore } from "@/store/store";

const CardProducts = ({
  name,
  description,
  price_usd,
  original_price_usd,
  discount,
  currency,
  image,
  index,
  id,
}: ProductsProps) => {
  const product = {
    id: id,
    name: name,
    description: description,
    price_usd: price_usd,
    original_price_usd: original_price_usd,
    discount: discount,
    currency: currency,
    image: image,
    index: index,
  };

  const addToFavorite = useStore((state) => state.addToFav);

  return (
    <div className="relative rounded-lg group max-w-[285px] mb-[32px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
      <Image width={285} height={300} src={image} alt={name} />
      {discount && (
        <div
          className={`absolute flex justify-center items-center text-white top-6 right-4 w-[48px] h-[48px] rounded-full ${
            discount !== "New" ? "bg-[#E97171]" : "bg-[#13d63d]"
          }`}
        >
          {discount}
        </div>
      )}

      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <button className="bg-white text-black py-2 px-4 mb-4">
          Add to cart
        </button>
        <div className="text-white flex space-x-4">
          <span className="cursor-pointer">Share</span>
          <span className="cursor-pointer">Compare</span>
          <span
            onClick={() => addToFavorite(product)}
            className="cursor-pointer"
          >
            Like
          </span>
        </div>
      </div>

      <div className="bg-[#F4F5F7] w-full">
        <Title
          title={name}
          className="text-center text-[24px] font-semibold  pb-[8px] pt-[16px]"
        />
        <p className="text-center text-[16px] font-medium text-[#898989] pb-[8px] pt-[8px]">
          {description}
        </p>
        <div className="flex items-center gap-[8px] justify-center">
          <span className="text-[20px]">{price_usd}$</span>
          {discount && original_price_usd ? (
            <span className="line-through text-[16px] ">
              {original_price_usd} $
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CardProducts;
