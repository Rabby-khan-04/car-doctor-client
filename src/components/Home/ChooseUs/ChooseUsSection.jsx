import SectionTitle from "@/components/shared/SectionTitle";
import groupIcon from "@/assets/icons/group.svg";
import deliveryIcon from "@/assets/icons/delivery.svg";
import personIcon from "@/assets/icons/person.svg";
import wrenchIcon from "@/assets/icons/wrench.svg";
import checkIcon from "@/assets/icons/check.svg";
import boxIcon from "@/assets/icons/box.svg";
import FeatureCard from "./FeatureCard";

const ChooseUsSection = () => {
  const features = [
    {
      icon: groupIcon,
      title: "Expert Team",
    },
    {
      icon: deliveryIcon,
      title: "Timely Delivery",
    },
    {
      icon: personIcon,
      title: "24/7 Support",
    },
    {
      icon: wrenchIcon,
      title: "Best Equipment",
    },
    {
      icon: checkIcon,
      title: "100% Guranty",
    },
    {
      icon: boxIcon,
      title: "Timely Delivery",
    },
  ];

  return (
    <section className="pt-32">
      <div className="container">
        <SectionTitle
          title="Why Choose Us"
          subtitle="Core Features"
          text="We stand out by offering unparalleled expertise, reliability, and quality in car repair and maintenance services. Our core features are designed to provide a seamless experience, from expert diagnostics to timely repairs, ensuring your vehicle runs smoothly and efficiently. Trust us to deliver exceptional results that exceed expectations every time."
        />

        <div className="grid grid-cols-6 gap-6 pt-5">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} idx={idx} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
