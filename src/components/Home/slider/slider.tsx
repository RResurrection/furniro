import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { slider } from "@/utils/mock/slider/slider.json";

const Slider = () => {
  return (
    <div className="bg-[#FCF8F3] h-auto">
      <div className="flex flex-col justify-center items-center h-full">
        <h2 className="font-bold text-[50px]">
          50+ Beautiful rooms inspiration
        </h2>
        <p className="text-[16px]">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="horizontal"
          className="w-full max-w-xs mt-16 flex items-center justify-center"
        >
          <CarouselContent>
            {slider.map((slider, index) => (
              <CarouselItem key={index}>
                <div className="">
                  <Image
                    className="object-contain"
                    src={slider.image}
                    alt="slider"
                    width={400}
                    height={200}
                  />
                  <div>{slider.name}</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
