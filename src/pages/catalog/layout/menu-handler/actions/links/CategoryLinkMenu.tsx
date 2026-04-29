import { NavLink } from "react-router-dom";
import type { CategoryLinkMenuProps } from "../../../ts/props";
import style from "./CategoryLinkMenu.module.scss";

export const CategoryLinkMenu = ({
  PRODUCT_CATEGORY,
}: CategoryLinkMenuProps) => {
  return (
    <>
      <div className={style.categories}>
        <div className={style.section_title}>
          <h4>Explore more</h4>
        </div>
        {PRODUCT_CATEGORY.map(({ id, name }) => (
          <div className={style.link_category} key={id}>
            <NavLink className={style.link} to={"/"}>
              {name}
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};
