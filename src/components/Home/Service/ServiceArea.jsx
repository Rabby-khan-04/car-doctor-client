import SectionTitle from "@/components/shared/SectionTitle";
import ServiceCard from "./ServiceCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ServiceArea = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:5000/services");
      setServices(response.data);
    };

    fetchData();
  }, []);

  return (
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

        <div className="text-center">
          <Button
            onClick={() => navigate("/services")}
            variant="primary__outline"
            size="lg"
          >
            More Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
