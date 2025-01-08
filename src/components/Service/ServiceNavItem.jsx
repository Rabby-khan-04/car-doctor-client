import PropTypes from "prop-types";
import { GoArrowRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

const ServiceNavItem = ({ name, id }) => {
  return (
    <NavLink
      to={`/service/${id}`}
      className={({ isActive }) =>
        (isActive ? "bg-primary text-white" : "bg-white text-title") +
        " text-base font-semibold flex items-center justify-between p-[18px] rounded-md"
      }
    >
      {({ isActive }) => (
        <>
          <span>{name || "Full Car Repair"}</span>
          <GoArrowRight
            className={`text-2xl ${isActive ? "text-white" : "text-primary"}`}
          />
        </>
      )}
    </NavLink>
  );
};

ServiceNavItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ServiceNavItem;
