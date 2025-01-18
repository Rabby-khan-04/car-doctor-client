import serviceImage from "@/assets/images/services/1.jpg";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="rounded-xl border border-platinum group">
      <Link
        to={`/service/${_id}`}
        className="inline-block p-6 space-y-5 w-full"
      >
        <img
          src={img || serviceImage}
          className="w-full inline-block h-52 object-cover object-center rounded-xl"
          alt=""
        />
        <h2 className="text-2xl font-bold text-title">{title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-xl text-primary font-semibold">Price: ${price}</p>
          <div className="size-6 relative overflow-hidden">
            <GoArrowRight className="text-2xl text-primary absolute left-0 top-0 bottom-0 right-0 transition-all duration-300 origin-left group-hover:translate-x-14" />
            <GoArrowRight className="text-2xl text-primary absolute left-0 top-0 bottom-0 right-0 transition-all duration-300 origin-left -translate-x-14 group-hover:translate-x-0" />
          </div>
        </div>
      </Link>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServiceCard;
