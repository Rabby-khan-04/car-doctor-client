import AboutSection from "@/components/Home/About/AboutSection";
import Banner from "@/components/Home/Banner/Banner";
import ContactSection from "@/components/Home/Contact/ContactSection";
import ServiceArea from "@/components/Home/Service/ServiceArea";

const Home = () => {
  return (
    <main>
      <Banner />
      <AboutSection />
      <ServiceArea />
      <ContactSection />
    </main>
  );
};

export default Home;
