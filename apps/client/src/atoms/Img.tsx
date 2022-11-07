import {Image} from "@chakra-ui/react";

interface Props {
    image: string,
    alt: string
}

export default function Img({image, alt}: Props) {

    return (
      <>
          <Image h="32" alt={alt} src={image} />
      </>
    );
}