import React from "react";
import Image from "next/image";

import Item from "../Item/Item";

type Props = {};

const CategoryBricks: React.FC<Props> = ({ categories, title }) => {
  if (!(categories.length > 0)) return null;

  return (
    <div>
      <h2 className="font-medium mb-2">{title}</h2>

      <div className="grid category-grid mb-4">
        {categories.map((cat) => (
          <Item key={cat.id} img={cat.img} height={100} width={200} imgClassName="w-full h-20" />
        ))}
      </div>
    </div>
  );
};

export default CategoryBricks;
