import { useState } from "react";

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
  //   const setProductDetailLink = (
  //     category: string,
  //     item: PRODUCT,
  //     product: string,
  //   ) => {
  //     return `/shop/details/${product}/${category}/${item.model.replace(/ /g, "-")}/${item.item_ID}`;
  //   };

  return {
    formatPriceParts,
    checked,
    handleToggle,
    setChecked,
    // setProductDetailLink,
  };
};
