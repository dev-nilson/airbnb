import Image from "next/image";
import { Result } from "../typescript/interfaces";
import { HeartIcon } from "@heroicons/react/outline";

function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: Result) {
  return (
    <div className="flex">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          fill={true}
          alt="result"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default InfoCard;
