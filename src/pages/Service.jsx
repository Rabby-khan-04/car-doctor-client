import ServiceBody from "@/components/Service/ServiceBody";
import SectionBanner from "@/components/shared/SectionBanner";

const Service = () => {
  return (
    <main>
      <section>
        <div className="container">
          <SectionBanner title="Service Details" />
        </div>
      </section>

      <ServiceBody />
    </main>
  );
};

export default Service;
