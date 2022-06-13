import Image from "next/image";

export default function Skill({ src, size, alt }) {
  return <Image src={src} width={size} height={size} alt={alt} />;
}
