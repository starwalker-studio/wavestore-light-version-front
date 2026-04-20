import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import style from "./MenuItems.module.scss";

export const MenuItems = () => {
  return (
    <>
      <div className={style.menu_item_phone}>
        <div className={style.phone_container}>
          <span>{`(800) 224-4781`}</span>
        </div>
      </div>
      <div className={style.menu_item}>
        <div className={style.menu_item_container}>
          <NavLink to={"/contact"}></NavLink>
          <span>Contact Us</span>
        </div>
      </div>
      <div className={style.menu_item}>
        <div className={style.menu_item_container}>
          <NavLink to={"/contact"}></NavLink>
          <span>Account</span>
        </div>
      </div>
      <div className={style.menu_item}>
        <div className={style.menu_item_container}>
          <NavLink to={"/account"}></NavLink>
          <span className={style.icon_cart}>
            <FontAwesomeIcon icon={faCartShopping} />
          </span>
        </div>
      </div>
    </>
  );
};
