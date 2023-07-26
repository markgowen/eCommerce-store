"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Expand, ShoppingCart } from "lucide-react";

import { Product } from "@/types";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";

import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data?.id}`);
  };

  const onPreview: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    previewModal.onOpen(data);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer space-y-4 rounded-xl  p-3"
    >
      {/* Images and Actions */}
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <Image
          src={data?.images?.[0]?.url}
          fill
          alt="Image"
          className="aspect-square rounded-md object-cover"
        />
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-4">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="text-lg font-semibold">{data.name.toUpperCase()}</p>
        {/* <p className="text-sm text-gray-500">{data.category?.name}</p>u */}
        {/* Price */}
        <div className="flex items-center justify-between">
          <Currency value={data?.price} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
