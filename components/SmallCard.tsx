import React from "react";
import Image from "next/image";
import { SmallCardProps } from "../typescript/types";

function SmallCard({ image, location, distance }: SmallCardProps) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image
          className="rounded-lg"
          src={image}
          alt="place"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
