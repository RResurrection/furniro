"use client";

import { Skeleton } from "@nextui-org/skeleton";

const SkeletonCategoty = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Skeleton className="flex justify-center items-center w-[380px] h-[480px] bg-gray-300 rounded-lg border ">
        <Skeleton className="w-[350px] h-[450px] bg-gray-300 p-6 rounded-lg border" />
      </Skeleton>
      <Skeleton className="w-[80px] h-[35px] bg-gray-300 rounded-lg  p-6 mt-[30px]" />
    </div>
  );
};

export default SkeletonCategoty;
