import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/common/footer/Footer";
import { Header } from "../components/common/header/Header";
import { WaveStoreRoutes } from "../routes/WaveStoreRoutes";

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
    </Routes>
  );
};
