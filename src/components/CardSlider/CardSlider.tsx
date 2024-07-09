import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import Image from "next/image";

const CardSlider: React.FC = ({ items }) => {
  const [current, setCurrent] = useState(items[0]);

  return (
    <div className="overflow-x-hidden flex flex-col">
      <div className="mb-6">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="my-swiper"
          longSwipes={false}
          onSlideChange={(e) => setCurrent(items[e.activeIndex])}
        >
          {items.map((item) => (
            <div key={item.id}>
              <SwiperSlide>
                <Image
                  src={item.img}
                  alt={item.name}
                  width={280}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>

      {current?.name && (
        <div className="flex justify-center mb-4">
          <span className="font-medium">{current.name}</span>
          <span>&nbsp;-&nbsp;</span>
          <span>{current.distance}km</span>
        </div>
      )}

      <button className="flex text-white items-center justify-center border-2 border-red-400 rounded-full bg-red-400 p-2">
        <span className="font-medium mr-2 text-xl">Adotar</span>
        <span className="i-mdi-heart w-8 h-8"></span>
      </button>
    </div>
  );
};

export default CardSlider;
