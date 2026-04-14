import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <section className={style.site_header}>
        <div className={style.header_container}>
          <div className={style.header_wrapper}>
            <header className={style.header_menu}>
              <div className={style.menu_logo}>
                <NavLink to={"/"}>
                  <img src="/img/logo/wavestore-logo.svg" alt="" />
                </NavLink>
              </div>
              <div className={style.menu_search_wrap}>
                <div className={style.autocomplete}>
                  <form className={style.search_form}>
                    <div className={style.icon_wrapper}>
                      <span>
                        <FontAwesomeIcon icon={faSearch} />
                      </span>
                    </div>
                    <div className={style.input_wrapper}>
                      <input type="text" placeholder="search on wavestore" />
                    </div>
                  </form>
                </div>
              </div>
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
                    <span className={style.icon_cart}><FontAwesomeIcon icon={faCartShopping} /></span>
                </div>
              </div>
            </header>
          </div>
        </div>
      </section>
    </>
  );
};
