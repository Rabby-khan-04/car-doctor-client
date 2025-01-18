import ServiceCard from "@/components/Home/Service/ServiceCard";
import SectionBanner from "@/components/shared/SectionBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import axios from "axios";
import { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("./services.json");
      setServices(response.data);
    };

    fetchData();
  }, []);

  return (
    <main>
      {/* Service Banner */}
      <section>
        <div className="container">
          <SectionBanner title="Services" />
        </div>
      </section>

      {/* Services Section */}
      <section className="pt-32">
        <div className="container">
          <SectionTitle
            subtitle="Service"
            title="Our Service Area"
            text="We offer a comprehensive range of car repair and maintenance services designed to meet your needs. From diagnostics to complete overhauls, our expert technicians ensure your vehicle gets the care it deserves, keeping you on the road with confidence."
          />

          <div className="mt-5 grid grid-cols-3 gap-6 mb-12">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
