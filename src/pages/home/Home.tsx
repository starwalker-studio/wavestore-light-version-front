import { Categories } from "./components/categories/Categories";
import { FeaturedProducts } from "./components/featured-products/FeaturedProducts";
import { Hero } from "./components/hero/Hero";
import { Payment } from "./components/payment/Payment";

export const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Payment />
    </>
  );
};
