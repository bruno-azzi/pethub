import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  url: string;
  img: string;
  width?: number;
  height?: number;
  name?: string;
  rating?: number;
  date?: string;
  distance?: number;
  price?: number;
  type?: string;
  className?: string;
  imgClassName?: string;
};

const Item: React.FC<Props> = ({
  name,
  img,
  rating,
  distance,
  date,
  type,
  width = 50,
  height = 50,
  price = null,
  className = "",
  imgClassName = "",
  url = "",
}) => {
  return (
    <Link className={`flex ${price ? 'flex-col' : 'flex-row'} ${className}`} href={url}>
      <Image
        src={img}
        alt="image"
        width={width}
        height={height}
        className={`rounded-2xl object-cover ${imgClassName}`}
      />
      {name && (
        <div className={`flex flex-col justify-center ${price ? '' : 'ml-4'}`}>
          <span className="font-medium">{name}</span>

          {price && <span>R$ {price.toFixed(2).replace(".", ",")}</span>}

          <span className="">{date}</span>

          {rating && type && distance && (
            <div className="flex items-center">
              <span className="i-mdi-star text-xl mr-1 text-yellow-400"></span>
              <span>{rating}</span>
              <span className="mx-1"> - </span>
              <span>{type}</span>
              <span className="mx-1"> - </span>
              <span>{distance}km</span>
            </div>
          )}
        </div>
      )}
    </Link>
  );
};

export default Item;
