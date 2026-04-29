import { Route, Routes } from "react-router-dom";
import { Cart } from "../../pages/cart/Cart";

export const WavestoreCartRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};
