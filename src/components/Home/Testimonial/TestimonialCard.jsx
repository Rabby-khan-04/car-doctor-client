import PropTypes from "prop-types";
import { FaQuoteLeft } from "react-icons/fa";
import starImg from "@/assets/icons/star.png";

const TestimonialCard = ({ testimonial }) => {
  const { image, name, designation, review } = testimonial;

  return (
    <div className="p-12 rounded-xl border border-platinum relative">
      <div className="flex items-center gap-5 mb-5">
        <img src={image} className="inline-block size-[60px]" alt="" />
        <div>
          <h2 className="text-2xl font-bold text-title mb-2">{name}</h2>
          <p className="text-xl font-semibold text-nickel">{designation}</p>
        </div>
      </div>
      <p className="text-base font-normal text-nickel mb-5">{review}</p>
      <img src={starImg} className="inline-block w-28" alt="" />
      <div className="absolute right-28 top-14">
        <FaQuoteLeft className="text-6xl text-primary/20" />
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

export default TestimonialCard;
