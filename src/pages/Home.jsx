import AboutSection from "@/components/Home/About/AboutSection";
import Banner from "@/components/Home/Banner/Banner";
import ContactSection from "@/components/Home/Contact/ContactSection";
import PopularProducts from "@/components/Home/Product/PopularProducts";
import ServiceArea from "@/components/Home/Service/ServiceArea";

const Home = () => {
  return (
    <main>
      <Banner />
      <AboutSection />
      <ServiceArea />
      <ContactSection />
      <PopularProducts />
    </main>
  );
};

export default Home;
