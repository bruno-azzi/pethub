import React from "react";
import Image from "next/image";

import Item from "../Item/Item";

type Props = {};

const ItemsSlider: React.FC<Props> = ({ items, title }) => {
  if (!(items.length > 0)) return null;

  return (
    <div className="flex flex-col mx-[-16px] mb-2">
      <h2 className="px-4 mb-2 font-medium">{title}</h2>

      <div className="flex gap-x-3 overflow-x-scroll pb-2 px-4">
        {items.map((item) => (
          <Item
            key={item.id}
            img={item.img}
            height={50}
            width={50}
            imgClassName="min-w-16 h-16 rounded-full"
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemsSlider;
