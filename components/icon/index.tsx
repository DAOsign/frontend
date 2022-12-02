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

function Icon({ src, className = "", alt = "", width, height, ...others }: IconProps) {
  return (
    //@ts-ignore
    <Image
      layout="responsive"
      width={width || src.width}
      height={height || src.height}
      className={className}
      src={src.src}
      alt={alt}
      {...others}
    />
  );
}

export default Icon;
