import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Item from "../Item/Item";

import { Pagination, Navigation } from "swiper/modules";

const ItemCarousel = ({ items, title }) => {
  if (!(items.length > 0)) return null;

  return (
    <div className="mb-4">
      <h2 className="mb-2 font-medium">{title}</h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination
        navigation
        modules={[Pagination, Navigation]}
      >
        {items.map((item) => (
          <div key={item.id}>
            <SwiperSlide>
              <Item img={item.img} url={item.url} width={400} height={100} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default ItemCarousel;
