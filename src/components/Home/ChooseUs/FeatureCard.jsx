import PropTypes from "prop-types";

const FeatureCard = ({ feature, idx }) => {
  const { icon, title } = feature;

  return (
    <div
      className={`py-8 px-6 rounded-xl border border-platinum ${
        idx === 1 ? "bg-primary text-white" : "bg-transparent text-title"
      } text-center space-y-5 `}
    >
      <img src={icon} className="inline-block size-14" alt="" />
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  );
};

FeatureCard.propTypes = {
  feature: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};

export default FeatureCard;
