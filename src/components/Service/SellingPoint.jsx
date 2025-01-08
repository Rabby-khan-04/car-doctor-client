import PropTypes from "prop-types";

const SellingPoint = ({ title, description }) => {
  return (
    <div className="bg-flash_white rounded-xl border-t border-t-primary p-10">
      <h3 className="text-text text-xl font-bold mb-[10px]">{title}</h3>
      <p className="text-nickel ">{description}</p>
    </div>
  );
};

SellingPoint.propTypes = {};

export default SellingPoint;
