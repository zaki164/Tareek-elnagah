import { HTMLAttributes, useState } from "react";
import { images } from "../Constants";
import { LazyLoadImage, LazyLoadImageProps } from "react-lazy-load-image-component";

interface ImageProps extends HTMLAttributes<HTMLImageElement>, LazyLoadImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt, className, ...rest }: ImageProps) => {
  const [imageSrc, setImageSrc] = useState(src || images?.logo);
  return (
    <LazyLoadImage
      src={imageSrc}
      alt={alt}
      effect="blur"
      className={className}
      onError={() => setImageSrc(images?.logo)}
      {...rest}
    // placeholderSrc={images.logo}
    />
  )
}

export default Image