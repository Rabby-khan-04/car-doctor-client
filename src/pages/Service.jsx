import ServiceBody from "@/components/Service/ServiceBody";
import SectionBanner from "@/components/shared/SectionBanner";
import { useLoaderData } from "react-router-dom";

const Service = () => {
  const { data } = useLoaderData();
  return (
    <main>
      <section>
        <div className="container">
          <SectionBanner title="Service Details" />
        </div>
      </section>

      <ServiceBody service={data} />
    </main>
  );
};

export default Service;
