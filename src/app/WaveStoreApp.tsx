import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/common/footer/Footer";
import { Header } from "../components/common/header/Header";
import { WaveStoreRoutes } from "../routes/WaveStoreRoutes";
import { WavestoreCartRoutes } from "../routes/cart/WavestoreCartRoutes";
import { ProductDetailRoutes } from "../routes/products/ProductDetailRoutes";
import { ProductRoutes } from "../routes/products/ProductRoutes";

export const WaveStoreApp = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <Header />
            <WaveStoreRoutes />
            <Footer />
          </>
        }
      />
      <Route
        path="/shop/*"
        element={
          <>
            <Header />
            <ProductRoutes />
            <ProductDetailRoutes />
            <WavestoreCartRoutes />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};
