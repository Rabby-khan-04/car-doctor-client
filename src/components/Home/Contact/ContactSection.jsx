import calendarIcon from "@/assets/icons/calendar.png";
import callIcon from "@/assets/icons/call.png";
import locationIcon from "@/assets/icons/location.png";
import ContactBlurb from "./ContactBlurb";

const ContactSection = () => {
  const contactInfo = [
    {
      text: "We are open monday-friday",
      info: "7:00 am - 9:00 pm",
      icon: calendarIcon,
      link: "/",
    },
    {
      text: "Have a question?",
      info: "+2546 251 2658",
      icon: callIcon,
      link: "/",
    },
    {
      text: "Need a repair? our address",
      info: "Liza Street, New York",
      icon: locationIcon,
      link: "/",
    },
  ];

  return (
    <section className="pt-32">
      <div className="container bg-title rounded-xl py-24 px-20 grid grid-cols-3 gap-16">
        {contactInfo.map((info, idx) => (
          <ContactBlurb key={idx} info={info} />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
