import type { MenuProps } from '../ts/props';
import style from './Menu.module.scss';

export const Menu = ({ MenuHandler, children, title }: MenuProps) => {
  return (
    <>
      <div className={style.item_page}>
        <div className={style.item_header}>
          <h1>{title}</h1>
        </div>
        <div className={style.category_flex}>
          <div className={style.item_category_section}>
            <div className={style.catalog_title}>
              <p>Refine Your Search</p>
            </div>
            <div>{MenuHandler}</div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};
