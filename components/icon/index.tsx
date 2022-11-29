import React, { ImgHTMLAttributes } from "react";
import Image from "next/image";

export interface IconProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: Icon;
}

interface Icon {
  width: number;
  height: number;
  src: string;
}

function Icon({ src, className = "", alt = "", ...others }: IconProps) {
  //@ts-ignore
  return (
    <Image
      width={src.width}
      height={src.height}
      src={src.src}
      alt={alt}
      {...others}
      className={className}
    />
  );
}

export default Icon;
