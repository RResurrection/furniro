import { CategoriesProps } from "@/models/query-props";
import Image from "next/image";
import Link from "next/link";

const Categories = ({ image, name }: CategoriesProps) => {
  return (
    <Link
      href={`/product-shop/${name}`}
      className="flex flex-col justify-center items-center cursor-pointer hover:scale-95 transition-transform duration-150 px-[15px] "
    >
      <Image
        loading="lazy"
        className="rounded-lg bg-[#101010] p-6"
        width={380}
        height={480}
        src={image}
        alt={name}
      />
      <p className="text-[20px] md:text-[24px]  font-semibold mt-[30px]">
        {name}
      </p>
    </Link>
  );
};

export default Categories;
