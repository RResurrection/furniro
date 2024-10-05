import BrowseRange from "@/components/Home/browse-range/BrowseRange";
import SkeletonCategoty from "@/components/Home/browse-range/SkeletonCategoty";
import Gallery from "@/components/Home/gallery/gallery";
import OurProducts from "@/components/Home/our-products/our-products";
import Hero from "@/components/Home/section-hero/Hero";
import Slider from "@/components/Home/slider/slider";
import QueryWrapper from "@/components/QueryWrapper/QueryWrapper";

export default function Home() {
  return (
    <div>
      <Hero />
      <QueryWrapper>
        <BrowseRange />
        <OurProducts />
      </QueryWrapper>
      <Slider />
      <Gallery />
    </div>
  );
}
