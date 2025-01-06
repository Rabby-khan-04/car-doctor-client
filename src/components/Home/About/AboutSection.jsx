import person from "@/assets/images/about_us/person.jpg";
import parts from "@/assets/images/about_us/parts.jpg";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="pt-32">
      <div className="container grid grid-cols-5 gap-28">
        <div className="relative col-span-2">
          <img
            src={person}
            className="w-full inline-block rounded-xl h-[470px] object-cover object-center"
            alt=""
          />
          <div className="absolute -bottom-14 -right-14">
            <img
              src={parts}
              className="w-80 h-80 object-cover object-center inline-block border-[10px] border-white rounded-xl"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-3 self-center">
          <SectionTitle
            subtitle="About Us"
            title="We are qualified & of experience in this field"
            text="We take pride in offering top-notch car repair services, backed by years of expertise and a passion for excellence. Our skilled professionals are dedicated to ensuring your vehicle receives the care it deserves, delivering reliable and efficient solutions for every need."
            text2="Our team brings extensive knowledge and experience to every repair, ensuring your vehicle is in capable hands. With a commitment to quality and customer satisfaction, we strive to provide services that keep you safe and your car running at its best."
            align="left"
          />

          <Button variant="primary" size="lg">
            Get More Info
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
