import AboutSection from "@/components/Home/About/AboutSection";
import Banner from "@/components/Home/Banner/Banner";
import ChooseUsSection from "@/components/Home/ChooseUs/ChooseUsSection";
import ContactSection from "@/components/Home/Contact/ContactSection";
import PopularProducts from "@/components/Home/Product/PopularProducts";
import ServiceArea from "@/components/Home/Service/ServiceArea";
import TeamSection from "@/components/Home/Team/TeamSection";
import TestimonialSection from "@/components/Home/Testimonial/TestimonialSection";

const Home = () => {
  return (
    <main>
      <Banner />
      <AboutSection />
      <ServiceArea />
      <ContactSection />
      <PopularProducts />
      <TeamSection />
      <ChooseUsSection />
      <TestimonialSection />
    </main>
  );
};

export default Home;
