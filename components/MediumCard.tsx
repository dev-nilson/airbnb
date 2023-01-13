import React from "react";
import Image from "next/image";
import { MediumCardProps } from "../typescript/types";

function MediumCard({ image, title }: MediumCardProps) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image className="rounded-xl" src={image} alt="place" fill={true} />
      </div>
      <h3 className="text-xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
