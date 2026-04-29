import { useEffect, useState } from "react";
import { useProductStore } from "../../../api/store/product.store";
import { useMenu } from "../../../hooks/useMenu";
import { DisplayProducts } from "../layout/display-products/DisplayProducts";
import { MenuHandler } from "../layout/menu-handler/MenuHandler";
import { Menu } from "../layout/menu/Menu";
import { PRODUCT_ENV } from "../layout/ts/env";

export const GuitarProducts = () => {
  const {
    products,
    // loadingBrands,
    // loadingPriceRange,
    // loadingProducts,
    fetchProducts,
    fetchProductBrands,
    fetchProductPriceRange,
    fetchProductCategories,
    lastPage,
    currentPage,
    total,
    brands,
    price_range,
    categories,
  } = useProductStore();
  const { checked, setChecked } = useMenu();
  const [mayor, setMayor] = useState(0);
  const [minor, setMinor] = useState(0);
  const [inStock, setInStock] = useState<boolean>(false);

  useEffect(() => {
    fetchProductBrands(1);
    fetchProductPriceRange();
    fetchProductCategories();
  }, []);

  useEffect(() => {
    fetchProducts({
      page: 1,
      id_category: 1,
      in_stock: inStock ? 1 : undefined,
      min_price: minor || undefined,
      max_price: mayor || undefined,
      id_brand: checked.length ? checked : undefined,
    });
  }, [inStock, minor, mayor, checked]);

  const handlePageChange = (page?: number) => {
    fetchProducts({
      page,
      id_category: 1,
      in_stock: inStock ? 1 : undefined,
      min_price: minor || undefined,
      max_price: mayor || undefined,
      id_brand: checked.length ? checked : undefined,
    });
  };

  return (
    <>
      <Menu
        MenuHandler={
          <MenuHandler
            brand_list={brands}
            checked={checked}
            sendChecked={(e: number[]) => setChecked(e)}
            setMax={(e: number) => setMayor(e)}
            setMin={(e: number) => setMinor(e)}
            setInStock={(e: boolean) => setInStock(e)}
            inStock={inStock}
            price_range={price_range}
            PRODUCT_CATEGORY={categories}
          />
        }
        title={PRODUCT_ENV.TITLE.ELECTRIC_GUITAR_SOLID}
      >
        <DisplayProducts
          list={products}
          lastPage={lastPage}
          currentPage={currentPage}
          totalProducts={total}
          product={"guitar"}
          category={"electric-guitar-solid"}
          onPageChange={handlePageChange}
        />
      </Menu>
    </>
  );
};
