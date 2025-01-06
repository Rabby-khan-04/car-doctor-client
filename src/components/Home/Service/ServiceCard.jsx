import serviceImage from "@/assets/images/services/1.jpg";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const ServiceCard = () => {
  return (
    <div className="rounded-xl border border-platinum group">
      <Link to="/" className="inline-block p-6 space-y-5 w-full">
        <img
          src={serviceImage}
          className="w-full inline-block h-52 object-cover object-center rounded-xl"
          alt=""
        />
        <h2 className="text-2xl font-bold text-title">Electrical System</h2>
        <div className="flex items-center justify-between">
          <p className="text-xl text-primary font-semibold">Price: $200</p>
          <div className="size-6 relative overflow-hidden">
            <GoArrowRight className="text-2xl text-primary absolute left-0 top-0 bottom-0 right-0 transition-all duration-300 origin-left group-hover:translate-x-14" />
            <GoArrowRight className="text-2xl text-primary absolute left-0 top-0 bottom-0 right-0 transition-all duration-300 origin-left -translate-x-14 group-hover:translate-x-0" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
