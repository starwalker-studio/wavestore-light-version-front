import type { WavestoreProduct } from "../../../../api/products/product.interface";
import { useMenu } from "../../../../hooks/useMenu";
import { ActionButtons } from "../action-buttons/ActionButtons";
import { IconRow } from "../icon-row/IconRow";
import style from "./ProductPricing.module.scss";

type ProductPricingProps = {
  price: string;
  item: WavestoreProduct;
};

export const ProductPricing = ({ price, item }: ProductPricingProps) => {
  const { formatPriceParts } = useMenu();
  return (
    <>
      <section className={style.product_options}>
        <div className={style.product_pricing_top_level}>
          <div className={style.product_pricing}>
            <em className={style.price}>
              <div className={style.final_row}>
                <strong className={style.amount}>
                  {formatPriceParts(price).map((part, index) => {
                    if (part.type === "currency") return null;
                    if (part.type === "integer" || part.type === "group") {
                      return <span key={index}>{part.value}</span>;
                    }
                    if (part.type === "decimal" || part.type === "fraction") {
                      return (
                        <span key={index} className={style.decimal}>
                          {part.value}
                        </span>
                      );
                    }
                    return null;
                  })}
                </strong>
                <small></small>
              </div>
            </em>
          </div>
        </div>
        <div>
          <ActionButtons item={item} />
          <IconRow />
          <div className={style.product_info}>
            <h3>About this Item</h3>
            <p>{item.product_info}</p>
          </div>
        </div>
      </section>
    </>
  );
};
