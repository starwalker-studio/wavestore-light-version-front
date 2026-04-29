import { Link } from "react-router-dom";
import { useMenu } from "../../../../../hooks/useMenu";
import type { ProductCardProps } from "../../ts/props";
import style from "./ProductCard.module.scss";

export const ProductCard = ({ list, category, product }: ProductCardProps) => {
  const { formatPriceParts, setProductDetailLink } = useMenu();
  return (
    <>
      {list.map((item) => (
        <div className={style.product} key={item.id}>
          <Link to={setProductDetailLink(category, item, product)}>
            <div className={style.card}>
              <img
                src={item.img}
                className={style.card_img}
                alt="product"
                sizes="(min-width: 1440px) 215px, 140px"
              />
            </div>
            <div className={style.info}>
              <h2 className={style.model}>{item.model}</h2>
              <em>
                <div className={style.final_row}>
                  <div>
                    <strong className={style.amount}>
                      <span className={style.currency}>$</span>
                      {formatPriceParts(item.price).map((part, index) => {
                        if (part.type === "currency") return null;
                        if (part.type === "integer" || part.type === "group") {
                          return <span key={index}>{part.value}</span>;
                        }
                        if (
                          part.type === "decimal" ||
                          part.type === "fraction"
                        ) {
                          return (
                            <span key={index} className={style.decimal}>
                              {part.value}
                            </span>
                          );
                        }
                        return null;
                      })}
                    </strong>
                  </div>
                </div>
              </em>
              <span className={style.discount}>{item.description}</span>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
