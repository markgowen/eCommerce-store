import { Banner as BannerType } from "@/types";
import React from "react";

interface BannerProps {
  data: BannerType;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <div className="relative overflow-hidden rounded-xl p-4 sm:p-6 lg:p-8">
      <div className="absolute inset-0 z-10 flex items-center justify-center gap-y-8 text-center">
        <div className="max-w-sm text-2xl font-bold text-white sm:max-w-2xl sm:text-5xl lg:text-6xl">
          {data?.label}
        </div>
      </div>
      <div
        className="z-0 aspect-square overflow-hidden rounded-xl bg-cover brightness-75 md:aspect-[2.4/1]"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      ></div>
    </div>
  );
};

export default Banner;
