import Image from "next/image";

export const ProductImage = ({
  imageUrl,
  name,
}: {
  imageUrl: string;
  name: string;
}) => {
  return (
    <div className="w-full h-80 relative rounded-xl overflow-hidden shadow-md">
      <Image
        src={imageUrl}
        alt={name}
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};
