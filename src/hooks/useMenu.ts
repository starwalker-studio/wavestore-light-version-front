import { useState } from "react";
import type { WavestoreProduct } from "../api/products/product.interface";

export const useMenu = () => {
  const [checked, setChecked] = useState<number[]>([]);
  const handleToggle = (value: number, checked: number[]): number[] =>
    checked.includes(value)
      ? checked.filter((v) => v !== value)
      : [...checked, value];
  const formatPriceParts = (value: string | number) => {
    const formatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formatter.formatToParts(Number(value));
  };
  const setProductDetailLink = (
    category: string,
    item: WavestoreProduct,
    product: string,
  ) => {
    return `/shop/detail/${product}/${category}/${item.item_ID}`;
  };

  return {
    formatPriceParts,
    checked,
    handleToggle,
    setChecked,
    setProductDetailLink,
  };
};
