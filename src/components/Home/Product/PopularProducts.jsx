import SectionTitle from "@/components/shared/SectionTitle";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";

const PopularProducts = () => {
  return (
    <section className="pt-32">
      <div className="container">
        <SectionTitle
          subtitle="Popular Products"
          title="Browse Our Products"
          text="Explore our selection of high-quality products tailored to meet your car's needs. From essential parts to premium accessories, find everything you need to enhance your vehicle's performance and style."
        />
        <div className="grid grid-cols-3 gap-6 pt-5 mb-12">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="text-center">
          <Button variant="primary__outline" size="lg">
            More Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
