import React from "react";
import Image from "next/image";
import photo from "../assets/photo.png";
export default function Photo() {
  return (
    <div>
      <Image src={photo} alt="Photo" width={400} height={400} />
    </div>
  );
}
