import { faCartShopping, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useCartStore } from "../../api/store/cart.store";
import { useMenu } from "../../hooks/useMenu";
import style from "./Cart.module.scss";
export const Cart = () => {
  const { items, getTotalItems, getTotal, updateQuantity, removeFromCart } =
    useCartStore();
  const { formatPriceParts } = useMenu();

  if (items.length === 0) {
    return (
      <div className={style.cart_section}>
        <div className={style.cart_container}>
          <div className={style.cart_wrapper}>
            <div className={style.cart_empty}>
              <FontAwesomeIcon icon={faCartShopping} size="4x" />
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added anything yet</p>
              <NavLink to="/shop">Start Shopping →</NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={style.cart_section}>
      <div className={style.cart_container}>
        <div className={style.cart_wrapper}>
          <div className={style.cart_row}>
            <div className={style.cart_items_card}>
              <div className={style.cart_items_header}>
                <h2>Shopping Cart</h2>
              </div>
              {items.map((item) => (
                <div className={style.cart_item_container} key={item.item_ID}>
                  <div className={style.cart_item}>
                    <div className={style.cart_item_img}>
                      <img src={item.img} alt={item.model} />
                      <p>
                        itemID: <span>{item.item_ID}</span>
                      </p>
                    </div>
                    <div className={style.cart_item_detail}>
                      <h3>{item.model}</h3>
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
                      <div className={style.cart_item_quantity_buttons}>
                        <button
                          onClick={() =>
                            updateQuantity(item.item_ID, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.item_ID, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                      <div className={style.cart_item_remove_buttom}>
                        <button onClick={() => removeFromCart(item.item_ID)}>
                          <span>
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </span>
                          remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={style.cart_total_card}>
              <div className={style.cart_estimated}>
                <p>{`Subtotal: ${getTotalItems()} items:`}</p>
                <p>${getTotal().toFixed(2)}</p>
              </div>
              <div className={style.cart_estimated}>
                <p>Estimated Shipping:</p>
                <p>Free 🎉</p>
              </div>
              <div className={style.cart_pay_buttons}>
                <button>Mercado Pago</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
