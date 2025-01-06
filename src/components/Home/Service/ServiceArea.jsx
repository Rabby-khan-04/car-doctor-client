import SectionTitle from "@/components/shared/SectionTitle";
import ServiceCard from "./ServiceCard";
import { Button } from "@/components/ui/button";

const ServiceArea = () => {
  return (
    <section className="pt-32">
      <div className="container">
        <SectionTitle
          subtitle="Service"
          title="Our Service Area"
          text="We offer a comprehensive range of car repair and maintenance services designed to meet your needs. From diagnostics to complete overhauls, our expert technicians ensure your vehicle gets the care it deserves, keeping you on the road with confidence."
        />

        <div className="mt-5 grid grid-cols-3 gap-6 mb-12">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>

        <div className="text-center">
          <Button variant="primary__outline" size="lg">
            More Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
