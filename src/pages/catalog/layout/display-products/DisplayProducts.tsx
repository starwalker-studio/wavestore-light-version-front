import type { DisplayProductsProps } from "../ts/props";
import style from "./DisplayProducts.module.scss";
import { Paginator } from "./paginator/Paginator";
import { ProductCard } from "./product-card/ProductCard";

export const DisplayProducts = ({
  list,
  lastPage,
  currentPage,
  totalProducts,
  onPageChange,
  category,
  product,
}: DisplayProductsProps) => {
  const goToPage = (page: number) => {
    if (page < 1 || page > lastPage) return;
    onPageChange(page);
  };
  return (
    <>
      <div className={style.products}>
        <div className={style.top}>
          <div className={style.total_products}>
            <p>{`${totalProducts} Products`}</p>
          </div>
        </div>
        <ProductCard list={list} category={category} product={product} />
        <div className={style.bottom}>
          <Paginator
            goToPage={goToPage}
            currentPage={currentPage}
            lastPage={lastPage}
          />
        </div>
      </div>
    </>
  );
};
