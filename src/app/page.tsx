import BrowseRange from "@/components/Home/browse-range/BrowseRange";
import SkeletonCategoty from "@/components/Home/browse-range/SkeletonCategoty";
import OurProducts from "@/components/Home/our-products/our-products";
import Hero from "@/components/Home/section-hero/Hero";
import QueryWrapper from "@/components/QueryWrapper/QueryWrapper";

export default function Home() {
  return (
    <div>
      <Hero />
      <QueryWrapper>
        <BrowseRange />
        <OurProducts />
      </QueryWrapper>
    </div>
  );
}
