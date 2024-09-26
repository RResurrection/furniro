"use client";

import Title from "@/components/shared/Title";

import { getCategories } from "@/actions/actions";
import { useQuery } from "@tanstack/react-query";

import Categories from "./Categories";
import SkeletonCategoty from "./SkeletonCategoty";
import { CategoriesProps } from "@/models/query-props";

const BrowseRange = () => {
  const {
    data: categories = [],

    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

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
      {isSuccess && (
        <div className="flex items-center gap-[48px] justify-center flex-wrap">
          {categories.map((category) => (
            <Categories key={category.id} {...category} />
          ))}
        </div>
      )}

      {isLoading && (
        <div className="flex items-center gap-[48px] justify-center">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <SkeletonCategoty key={index} />
            ))}
        </div>
      )}
    </>
  );
};

export default BrowseRange;
