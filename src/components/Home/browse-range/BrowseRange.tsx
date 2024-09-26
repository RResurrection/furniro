"use client";

import Title from "@/components/shared/Title";

import { getCategories } from "@/actions/actions";
import { useQuery } from "@tanstack/react-query";
import Categories from "./Categories";

const BrowseRange = () => {
  const {
    isPending,
    error,
    data: categories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="mt-[56px] max-w-screen-xl mx-auto mb-[62px]  ">
        <Title
          title="Browse Range"
          className="text-center text-[32px] font-bold"
        />
        <p className="text-center text-[20px]">
          Explore Stylish Comforts for Every Room
        </p>
      </div>
      <div className="flex items-center gap-[48px] justify-center flex-wrap">
        {categories.map((category) => (
          <Categories key={category.id} {...category} />
        ))}
      </div>
    </>
  );
};

export default BrowseRange;
