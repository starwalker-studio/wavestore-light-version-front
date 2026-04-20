import { Button } from "../../../../components/ui/button/Button";
import { useMenu } from "../../../../hooks/useMenu";
import { TEST_INFO_FEATURED } from "./dummy/test-info";
import style from "./FeaturedProducts.module.scss";

export const FeaturedProducts = () => {
  const { formatPriceParts } = useMenu();
  return (
    <section className={style.featured_section}>
      <div className={style.featured_container}>
        <div className={style.featured_wrapper}>
          <div className={style.featured_content}>
            <div className={style.featured_header}>
              <h2>Featured Products</h2>
            </div>
            <div className={style.featured_products}>
              <div className={style.featured_grid_3}>
                {TEST_INFO_FEATURED.map((item) => (
                  <div className={style.featured_item} key={item.id}>
                    <img src={item.img} alt="" />
                    <div className={style.item_detail}>
                      <h3>{item.title}</h3>
                      <p>{item.info}</p>
                      <div className={style.final_row}>
                        <strong className={style.amount}>
                          <span className={style.currency}>$</span>
                          {formatPriceParts(item.price).map((part, index) => {
                            if (part.type === "currency") return null;
                            if (
                              part.type === "integer" ||
                              part.type === "group"
                            ) {
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
                      <Button label="Add to Cart" variant="primary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
